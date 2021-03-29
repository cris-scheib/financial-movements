'use strict'

const User = use('App/Models/User')
const MovementType = use('App/Models/MovementType')
const Movement = use('App/Models/Movement')

const { test, trait, before } = use('Test/Suite')('Movement')

trait('Test/ApiClient')
trait('Auth/Client')

before(async() => {
    await User.create({
        username: 'test.movement',
        email: 'test.movement@test.com',
        password: 'test123'
    })
    await MovementType.create({
        name: 'Test Movement',
        action: true,
        status: true
    })
})


test('Create a movement', async({ client }) => {
    const user = await User.first()
    const type = await MovementType.first()

    const response = await client.post('api/movement/').send({
            name: 'Test',
            value: '100',
            movement_type_id: type.id
        })
        .loginVia(user, 'jwt')
        .end()

    response.assertStatus(200)
})

test('Get all movements', async({ client }) => {
    const user = await User.first()
    const response = await client.get('api/movement/')
        .loginVia(user, 'jwt')
        .end()

    response.assertStatus(200)
})

test('Get a movement', async({ client }) => {
    const user = await User.first()
    const movement = await Movement.first()
    const response = await client.put('api/movement/' + movement.id)
        .loginVia(user, 'jwt')
        .end()

    response.assertStatus(200)
})

test('Update a movement', async({ client }) => {
    const user = await User.first()
    const type = await MovementType.first()
    const movement = await Movement.first()

    const response = await client.put('api/movement/' + movement.id).send({
            name: 'Test 2',
            value: '100',
            movement_type_id: type.id
        })
        .loginVia(user, 'jwt')
        .end()

    response.assertStatus(200)
})

test('Delete a movement', async({ client }) => {
    const user = await User.first()
    const movement = await Movement.first()
    const response = await client.delete('api/movement/' + movement.id)
        .loginVia(user, 'jwt')
        .end()

    response.assertStatus(200)
})