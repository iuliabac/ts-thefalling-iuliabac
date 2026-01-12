import CanvasRenderer from './CanvasRenderer.js';

export default abstract class CanvasItem {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  public constructor() {
    this.posX = 0;
    this.posY = 0;
    this.image = new Image();
  }

  public getPosX(): number {
    if (this.image.src === '') {
      throw new Error(`${this.constructor.name}: Image not loaded`);
    }
    return this.posX;
  }

  public getPosY(): number {
    if (this.image.src === '') {
      throw new Error(`${this.constructor.name}: Image not loaded`);
    }
    return this.posY;
  }

  public getHeight(): number {
    if (this.image.src === '') {
      throw new Error(`${this.constructor.name}: Image not loaded`);
    }
    return this.image.height;
  }

  public getWidth(): number {
    if (this.image.src === '') {
      throw new Error(`${this.constructor.name}: Image not loaded`);
    }
    return this.image.width;
  }

  public render(canvas: HTMLCanvasElement): void {
    if (this.image.src === '') {
      throw new Error(`${this.constructor.name}: Image not loaded`);
    }
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
