package com.yueyi

import fivetiger.{FlagConst, GameLogic}
import fivetiger.model.ChessState
import wcgamelib._

object Game {


  def ss(unit: () => Unit) = ???

  def main(args: Array[String]): Unit = {
    val canvas = wx.createCanvas()
    val context = canvas.getContext("2d")
    //画背景
    //画棋盘
    context.fillStyle = "#CC9966"
    val stageWidth = 360
    val stageHeight = 540
    val baseTop = (canvas.height - stageHeight)/2
    val baseLeft = (canvas.width - stageWidth)/2
    context.fillRect(baseTop, baseLeft, stageWidth, stageWidth)

    //画线
    (0 to 4).map(i => Array((0, i, 4, i),(i, 0, i, 4))).flatten.foreach(f => {
      val m = 65
      val t = (stageWidth - (m * 4))/2
      val x1 = f._1 * m / 5 + t
      val y1 = f._2 * m / 5 + t
      val x2 = f._3 * m / 5 + t
      val y2 = f._4 * m / 5 + t
      context.strokeStyle = "black"
      context.beginPath()
      context.moveTo(x1, y1)
      context.lineTo(x2, y2)
      context.stroke()
    })

    //初始化棋盘
    val chessState = ChessState()
    GameLogic.position.map(m => (m._1, m._2, chessState.chessBoard(m._1)(m._2))).filterNot(_._3 == FlagConst.NONE_FLAG).foreach(f => {
      if (f._3 == FlagConst.FENSIVE_FLAG) {
        context.strokeStyle = "black"
        context.fillStyle = "black"
      } else if (f._3 == FlagConst.DEFENSIVE_FLAG) {
        context.strokeStyle = "white"
        context.fillStyle = "white"
      }
      context.beginPath()
      val m = 65
      val t = (stageWidth - (m * 4))/2
      context.arc(f._1 * m / 5 + t,f._2 * m / 5 + t,50,0,2 * Math.PI)
      context.stroke()
      context.fill()
    })


    wx.onTouchStart(renderFunc(res => {
      console.log("onTouchStart")
      console.log(res.touches)
    }))

    wx.onTouchMove(renderFunc(res => {
      console.log("onTouchMove")
      console.log(res.touches)
    }))

    wx.onTouchEnd(renderFunc(res => {
      console.log("onTouchEnd")
      console.log(res.touches)
    }))

    wx.onTouchCancel(renderFunc(res => {
      console.log("onTouchCancel")
      console.log(res.touches)
    }))
  }


  def refresh() = {}

  def renderFunc[A](f: () => A) = {
    () => {
      val result = f()
      refresh()
      result
    }
  }

  def renderFunc[A, B](f: A => B) = {
    (a: A) => {
      val result = f(a)
      refresh()
      result
    }
  }

  def renderFunc[A, B, C](f: (A, B) => C) = {
    (a: A, b: B) => {
      val result = f(a,b)
      refresh
      result
    }
  }




}
