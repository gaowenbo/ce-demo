package com.yueyi

import wcgamelib.wx

object Game {
  def main(args: Array[String]): Unit = {
    val canvas = wx.createCanvas()
    val context = canvas.getContext("2d")
    context.fillStyle := "#1aad19"
    context.fillRect(canvas.width/2 - 50, 0, 100, 100)
  }
}
