import sbtcrossproject.CrossPlugin.autoImport.{crossProject, CrossType}

lazy val copyDev = inputKey[Unit]("developCopy")
lazy val copyProd = inputKey[Unit]("prodCopy")

lazy val client = (project in file("client")).settings(commonSettings).settings(
  scalaJSUseMainModuleInitializer := true
).enablePlugins(ScalaJSPlugin).
  dependsOn(sharedJs)
  .settings(copyDev := {
    IO.copyFile(file("client")/"target/scala-2.12/client-fastopt.js", file("program")/"miniprogram/game.js")
    IO.copyFile(file("client")/"target/scala-2.12/client-fastopt.js.map", file("program")/"miniprogram/client-fastopt.js.map")
  }).settings(copyProd := {
  IO.copyFile(file("client")/"target/scala-2.12/client-opt.js", file("program")/"miniprogram/game.js")
})

lazy val shared = crossProject(JSPlatform, JVMPlatform)

  .settings(commonSettings)
  .settings(
    name := "shared"
  )
  .settings(
    libraryDependencies ++= Seq(
      "org.scala-lang" % "scala-reflect" % "2.12.8",
      "org.scala-js" %% "scalajs-library" % "1.0.0-M8"
    )
  )
lazy val sharedJvm = shared.jvm
lazy val sharedJs = shared.js

lazy val commonSettings = Seq(
  scalaVersion := "2.12.8",
  organization := "com.wenbo"
)

