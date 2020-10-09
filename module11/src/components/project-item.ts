import { Draggable } from '../models/drag-drop';
import { Project } from '../models/project';
import Component from './base-component';
import { Autobind } from '../decorators/autobind';

export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable {
  private project: Project;
  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @Autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  @Autobind
  dragEndHandler(_: DragEvent) {}

  get persons() {
    const hasOnePeople = this.project.people === 1;
    return hasOnePeople ? '1 person' : `${this.project.people} persons`;
  }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent() {
    const { title, description } = this.project;
    this.element.querySelector('h2')!.textContent = title;
    this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
    this.element.querySelector('p')!.textContent = description;
  }
}
