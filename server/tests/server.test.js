const expect = require("expect");
const request = require("supertest");

const { app } = require("../server");
const { Todo } = require("../models/todo");

//called before test request
beforeEach(done => {
    Todo.remove({}).then(() => done());
})

describe("POST /todos", () => {
    it("should create a new todo", done => {
        let text = "Test todod text";

        request(app)
            .post("/todos")
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text); //will fail if beforeEach not defined as above
                    done();
                }).catch(e => done(e));
            })
    });

    it("should not create todo with invalid text", done => {
        let text = "";

        request(app)
            .post("/todos")
            .send({ text })
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then(todos => {
                    expect(todos.length).toBe(0);
                    done();
                }).catch(e => done(e));
            })
    })
})