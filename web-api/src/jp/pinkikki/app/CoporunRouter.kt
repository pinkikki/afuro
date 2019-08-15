package jp.pinkikki.jp.pinkikki.app

import io.ktor.application.call
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get

fun Route.coporuns() {
    get("/coporuns") {
        val coporuns = listOf(
            Coporun("aruco", "4", "punch"),
            Coporun("dynam", "5", "kick")
        )
        call.respond(mapOf("coporuns" to coporuns))
    }
    get("/coporuns/1") {
        call.respond(mapOf("coporun" to Coporun("erumo", "1", "punch")))
    }
}
