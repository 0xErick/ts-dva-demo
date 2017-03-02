import * as React from "react"
import * as ReactDOM from "react-dom"
import Main from "./main"
import { Alert } from "antd"

const el = document.getElementById("main")

window.addEventListener("load", () => ReactDOM.render(<Alert type="info" message="警告"/>, el))
 
