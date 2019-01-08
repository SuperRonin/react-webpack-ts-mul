import * as React from "react"
import { render } from "react-dom"
import { debug } from "util";

import Ants from "./components/Ant"


render(
    // <h1>我的世界</h1>,
    <Ants name="张三" company="盛威时代"></Ants>,
    document.getElementById("login")
  )