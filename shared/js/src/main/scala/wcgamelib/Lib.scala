package wcgamelib

import scala.scalajs.js
import js.Dynamic._

object wx {
  def showToast(title: String = null, icon: String = "success", image: String = null, duration: Int = 1500, mask: String = null, success: js.Function = null, fail: js.Function = null, complete: js.Function = null): Unit = {
    val params = js.Dictionary(
      "title" -> title,
      "icon" -> icon,
      "image" -> image,
      "duration" -> duration,
      "mask" -> mask,
      "success" -> success,
      "fail" -> fail,
      "complete" -> complete
    ).filter(_._2 != null)
    global.wx.showToast(params)
  }

  def createCanvas(): Canvas = {
    new Canvas(global.wx.createCanvas())
  }


  def createImage(): Image = {
    new Image(global.wx.createImage())
  }

  def onTouchStart(func: TouchEvent => Unit): Unit = {
    global.wx.onTouchStart((res: js.Dynamic) => func(new TouchEvent(res)))
  }

  def onTouchMove(func: TouchEvent => Unit): Unit = {
    global.wx.onTouchMove((res: js.Dynamic) => func(new TouchEvent(res)))
  }

  def onTouchEnd(func: TouchEvent => Unit): Unit = {
    global.wx.onTouchEnd((res: js.Dynamic) => func(new TouchEvent(res)))
  }

  def onTouchCancel(func: TouchEvent => Unit): Unit = {
    global.wx.onTouchCancel((res: js.Dynamic) => func(new TouchEvent(res)))
  }
}

object console {
  def log(any: js.Any): Unit = global.console.log(any)
}

object setTimeout {
  def apply(function: js.Function, timeOut: Int): Unit = {
    global.setTimeout(function, timeOut)
  }
}

class Image(val image: js.Dynamic){
  def src = image.src.asInstanceOf[String]
  def src_=(srcStr: String) = {
    image.src = srcStr
  }

  def onload = image.onload.asInstanceOf[js.Function]
  def onload_=(function: js.Function) = {
    image.onload = function
  }
}


class Canvas(val canvas: js.Dynamic) {

  def draw(): Unit = {
    canvas.draw()
  }
  def getContext(context: String): CanvasContext = {
    new CanvasContext(canvas.getContext(context))
  }



  def width: Int = canvas.width.asInstanceOf[Int]
  def width_=(value: Int) = canvas.width = value
  def height: Int = canvas.height.asInstanceOf[Int]
  def height_=(value: Int) = canvas.height = value
}

class CanvasContext(val context: js.Dynamic) {
  def drawImage(image: Image, imgX: Int, imgY: Int) = context.drawImage(image.image, imgX, imgY)

  def drawImage(image: Image, imgX: Int, imgY: Int, width: Int, height: Int) = context.drawImage(image.image, imgX, imgY, width, height)

  def fillStyle = context.fillStyle.asInstanceOf[String]

  def fillStyle_=(fillStyleStr: String) = context.fillStyle = fillStyleStr

  def fillRect(x: Int, y: Int, width: Int, height: Int) = context.fillRect(x, y, width, height)

  def fill(): Unit = context.fill()

  def strokeStyle = context.strokeStyle.asInstanceOf[String]

  def strokeStyle_=(value: String) = context.strokeStyle = value

  def beginPath() = context.beginPath()

  def stroke() = context.stroke()

  def moveTo(x: Int, y: Int)  = context.moveTo(x, y)
  
  def arc(x: Int, y: Int, radius: Int, startAngle: Double, endAngle: Double, anticlockwise: Boolean = false) = context.arc(x, y, radius, startAngle, endAngle, anticlockwise)

  def arcTo(x1: Int, y1: Int, x2: Int, y2: Int, radius: Int) = context.arcTo(x1, y1, x2, y2, radius)

  def bezierCurveTo(cp1x: Int, cp1y: Int, cp2x: Int, cp2y: Int, x: Int, y: Int) = context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

  def closePath() = context.closePath()

  def ellipse(x: Int, y: Int, radiusX: Int, radiusY: Int, rotation: Int, startAngle: Double, endAngle: Double, anticlockwise: Boolean = false) = context.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)

  def lineTo(x: Int, y: Int) = context.lineTo(x, y)

  def quadraticCurveTo(cpx: Int, cpy: Int, x: Int, y: Int) = context.quadraticCurveTo(cpx, cpy, x, y)

  def rect(x: Int, y: Int, w: Int, h: Int) = context.rect(x, y, w, h)
}

class TouchEvent(val touchEvent: js.Dynamic) {
  def touches = touchEvent.touches

}





