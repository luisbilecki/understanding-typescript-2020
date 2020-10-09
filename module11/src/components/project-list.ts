import { DragTarget } from '../models/drag-drop.js';
import { Project, ProjectStatus } from '../models/project.js';
import { projectState } from '../state/project-state.js';
import Component from './base-component.js';
import { ProjectItem } from './project-item.js';
import { Autobind } from '../decorators/autobind.js';

export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget {
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  @Autobind
  dragOverHandler(event: DragEvent) {
    const isValidData =
      event.dataTransfer && event.dataTransfer.types[0] === 'text/plain';
    if (isValidData) {
      event.preventDefault();
      const listEl = this.element.querySelector('ul')!;
      listEl.classList.add('droppable');
    }
  }

  @Autobind
  dropHandler(event: DragEvent) {
    const prjId = event.dataTransfer!.getData('text/plain');
    projectState.moveProject(
      prjId,
      this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }

  @Autobind
  dragLeaveHandler(_: DragEvent) {
    const listEl = this.element.querySelector('ul')!;
    listEl.classList.remove('droppable');
  }

  configure() {
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
    this.element.addEventListener('drop', this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter(prj => {
        const projectListType =
          this.type === 'active'
            ? ProjectStatus.Active
            : ProjectStatus.Finished;
        return prj.status === projectListType;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = '';

    for (const project of this.assignedProjects) {
      const hostId = this.element.querySelector('ul')!.id;
      new ProjectItem(hostId, project);
    }
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' PROJECTS';
  }
}
