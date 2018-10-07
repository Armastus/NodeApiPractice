'use strict';
module.exports = function(app) {
    let apiPractice = require('../controllers/apiPracticeController');

    // todoList Routes
    app.route('/tasks')
        .get(apiPractice.list_all_tasks)
        .post(apiPractice.create_a_task);


    app.route('/tasks/:taskId')
        .get(apiPractice.read_a_task)
        .put(apiPractice.update_a_task)
        .delete(apiPractice.delete_a_task);
};