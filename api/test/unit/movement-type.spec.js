'use strict'

const User = use('App/Models/User')
const MovementType = use('App/Models/MovementType')

const { test, trait, before } = use('Test/Suite')('Movement Type')

trait('Test/ApiClient')
trait('Auth/Client')

before(async() => {
    await User.create({
        username: 'test.movement.type',
        email: 'test.movement.type@test.com',
        password: 'test123'
    })
})


test('Create a movement type', async({ client }) => {
    const user = await User.first()

    const response = await client.post('api/movement-type/').send({
            name: 'Test',
            action: true,
            status: true
        })
        .loginVia(user, 'jwt')
        .end()

    response.assertStatus(200)
})

test('Get all movement types', async({ client }) => {
    const user = await User.first()
    const response = await client.get('api/movement-type/')
        .loginVia(user, 'jwt')
        .end()

    response.assertStatus(200)
})

test('Get a movement type', async({ client }) => {
    const user = await User.first()
    const type = await MovementType.first()
    const response = await client.put('api/movement-type/' + type.id)
        .loginVia(user, 'jwt')
        .end()

    response.assertStatus(200)
})

test('Update a movement type', async({ client }) => {
    const user = await User.first()
    const type = await MovementType.first()

    const response = await client.put('api/movement-type/' + type.id).send({
            name: 'Test 2',
            action: true,
            status: true
        })
        .loginVia(user, 'jwt')
        .end()

    response.assertStatus(200)
})

test('Delete a movement type', async({ client }) => {
    const user = await User.first()
    const type = await MovementType.first()

    const response = await client.delete('api/movement-type/' + type.id)
        .loginVia(user, 'jwt')
        .end()

    response.assertStatus(200)
})