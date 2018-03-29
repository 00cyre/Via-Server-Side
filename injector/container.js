let _dependencies = []

module.exports = class Container {
    static getInstanceOf(dependency) {
        let service = _dependencies.filter(x => x.dependency == dependency)[0]
        let instance

        if (!service) {
            if (!dependency instanceof Function) throw new Error(`Dependecy ${dependency.constructor.name} is not a class`)

            instance = new dependency()
            _dependencies.push({ dependency, instance })
            console.log(`Creating a dependency for ${instance.constructor.name}`)
        } else {
            instance = service.instance
        }

        return instance
    }
}