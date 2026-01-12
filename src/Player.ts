import CanvasItem from './CanvasItem.js';
import CanvasRenderer from './CanvasRenderer.js';

export default class Player extends CanvasItem {
  private maxY: number;

  private direction: number;

  public constructor(maxY: number) {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/player.png');
    this.posX = 50;
    this.posY = 100;
    this.maxY = maxY;
    this.direction = 0;
  }

  /**
   * auyfdsuasgfduygf
   */
  public moveLeft(): void {
    this.direction =- 1;
  }

  /**
   * aisgduygasduyio
   */
  public moveRight(): void {
    this.direction =+ 1;
  }

  /**
   *sdfsdfsdfds
   * @param delta tfyifdt
   */
  public update(delta: number): void {
    this.posY += this.direction * delta ;

    if (this.posY < 0) {
      this.posY = 0;
    }

    if (this.posY + this.image.height > this.maxY) {
      this.posY = this.image.height - this.maxY;
    }

    this.direction = 0;
  }


  /**
   * asdasdsadsad
   * @param item uhasidyhasihd
   * @returns asdasdasd
   */
  public collidesWithItem(item: CanvasItem): boolean {
    return (
      item.getPosX() + item.getWidth() >= this.posX
      && item.getPosX() <= this.posX + this.image.width
      && item.getPosY() + item.getHeight() >= this.posY
      && item.getPosY() <= this.posY + this.image.height
    );
  }
}
