package wcgamelib

import scala.scalajs.js
import js.Dynamic._

object wx {
  def createCanvas(): Canvas = {
    new Canvas(global.wx.createCanvas())
  }
}

class Canvas(val canvas: js.Dynamic) {
  def getContext(context: String): CanvasContext = {
    new CanvasContext(canvas.getContext(context))
  }

  def width: Int = canvas.width.asInstanceOf[Int]
}

class CanvasContext(val context: js.Dynamic) {

  def fillStyle = new Object {
      def := (fillStyleStr: String) = context.fillStyle = fillStyleStr
  }

  def fillRect(a: Int, b: Int, c: Int, d: Int): Unit = {
    context.fillRect(a, b, c, d)
  }

}





