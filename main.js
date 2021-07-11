import World from './src/_world.js'
import sky from './src/_sky.js'
import { CameraSwitch_dev, FirstPersonCamera, OrbitCamera } from './src/_camera.js'
import Transform_dev from './src/_transform.js'
import { Box, Sphere } from './src/_primitives.js'

window.ENV = 'dev'

;(function main() {
    const canvas = document.getElementById('canvas')
    const world = new World(canvas)
    const camera = new CameraSwitch_dev(canvas)

    world.addChildren(sky)

    function run() {
        world.render(camera.Object3D)
        requestAnimationFrame(run)
    }
    run()

    window.addEventListener('resize', () => {
        camera.updateAspect(window.innerWidth/window.innerHeight)
        world.setSize(window.innerWidth, window.innerHeight)
    })
})()