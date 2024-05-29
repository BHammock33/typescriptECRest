import { User, UnitUser, Users } from "./user.interface";
import bcrypt from "bcryptjs"
import {v4 as random} from "uuid"
import fs from "fs"

let users: Users = loadUsers()

function loadUsers () : Users {
    try {
        const data = fs.readFileSync("./users.json", "utf-8")
        return JSON.parse(data)
    } catch (error) {
        console.log(`Error ${error}`)
        return {}
    }
}

function saveUsers () {
    try {
        fs.writeFileSync("./users.json", JSON.stringify(users), "utf-8")
        console.log(`User saved successfully!`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

