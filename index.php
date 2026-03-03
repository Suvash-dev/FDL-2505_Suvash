
<?php 
include "layouts/header.php"

?>


<!-- //http://localhost/phpTodo/ -->

<div class="col-lg-5 mx-auto ">
    <div class="card my-50px">
        <div class="card-header">Add New Todo</div>
        <div class="card-body">
            <form action="./controller/store_todo.php" method="POST">
                <div class="mb-3">
                    <label for="todoInput" class="form-label">Todo Title</label>
                    <input type="text" class="form-control" id="todoInput" name="title" placeholder="Enter your todo item">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Todo Description</label>
                    <input type="text" class="form-control" id="description" name="description" placeholder="Enter your todo description">
                </div>

                <div class="mb-3">
                    <label for="deadline" class="form-label">Deadline</label>
                    <input type="date" class="form-control" id="deadline" name="deadline">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>


<?php 
include "layouts/footer.php"

?>