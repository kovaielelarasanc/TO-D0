const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");


const toggleScreen = () => {
    wrapper.classList.toggle("show-category");
};

backBtn.addEventListener("click", toggleScreen);
menuBtn.addEventListener("click", toggleScreen);


const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackdrop = document.querySelector(".black-backdrop");

const toggelAddTaskForm = () => {
    addTaskForm.classList.toggle("active");
    blackBackdrop.classList.toggle("active");
    addTaskBtn.classList.toggle("active");

};

addTaskBtn.addEventListener("click", toggelAddTaskForm);
blackBackdrop.addEventListener("click", toggelAddTaskForm);

//add categories and tasks with js

let categories = [
    {
        title: "Personal",
        img: "woman.png",
    },
    {
        title: "Shopping",
        img: "shopping.png",
    },
    {
        title: "Work",
        img: "work.png",
    },
    {
        title: "Coding",
        img: "coding.png",
    },
    {
        title: "Health",
        img: "health.png",
    },
    {
        title: "Fitness",
        img: "fitness.png",
    },
    {
        title: "Education",
        img: "education.png",
    },
    {
        title: "Finance",
        img: "finance.png",
    },
];

let tasks = [
    {
        id: 1,
        task: "go to market",
        category: "Shopping",
        completed: false,
    },
    {
        id: 2,
        task: "read a book",
        category: "Personal",
        completed: false,
    },
    {
        id: 3,
        task: "for meeting",
        category: "Work",
        completed: false,
    },
    {
        id: 4,
        task: "complete coding challenge",
        category: "Coding",
        completed: false,
    },
    {
        id: 5,
        task: "30 min walk",
        category: "health",
        completed: false,
    },
    {
        id: 6,
        task: "HIIT workout",
        category: "Fitness",
        completed: false,
    },
    {
        id: 7,
        task: "educational video",
        category: "Education",
        completed: false,
    },
    {
        id: 8,
        task: "inversment protfolio",
        category: "Finance",
        completed: false,
    },

    {
        id: 9,
        task: "go to market",
        category: "Shopping",
        completed: false,
    },
    {
        id: 10,
        task: "read a book",
        category: "Personal",
        completed: false,
    },
    {
        id: 11,
        task: "for meeting",
        category: "Work",
        completed: false,
    },
    {
        id: 12,
        task: "complete coding challenge",
        category: "Coding",
        completed: false,
    },
    {
        id: 13,
        task: "30 min walk",
        category: "health",
        completed: false,
    },
    {
        id: 14,
        task: "HIIT workout",
        category: "Fitness",
        completed: false,
    },
    {
        id: 15,
        task: "educational video",
        category: "Education",
        completed: false,
    },
    {
        id: 16,
        task: "inversment protfolio",
        category: "Finance",
        completed: false,
    },
    {
        id: 17,
        task: "inversment protfolio",
        category: "Finance",
        completed: false,
    },

    {
        id: 18,
        task: "go to market",
        category: "Shopping",
        completed: false,
    },
    {
        id: 19,
        task: "read a book",
        category: "Personal",
        completed: false,
    },
    {
        id: 20,
        task: "for meeting",
        category: "Work",
        completed: false,
    },
    {
        id: 21,
        task: "complete coding challenge",
        category: "Coding",
        completed: false,
    },
    {
        id: 22,
        task: "30 min walk",
        category: "health",
        completed: false,
    },
    {
        id: 23,
        task: "HIIT workout",
        category: "Fitness",
        completed: false,
    },
    {
        id: 24,
        task: "educational video",
        category: "Education",
        completed: false,
    },
    {
        id: 25,
        task: "inversment protfolio",
        category: "Finance",
        completed: false,
    },

];

let selectedCategory = categories[0];

const categoriesContainer = document.querySelector(".categories");
const categoryTitle = document.querySelector(".category-title");
const totalCategoryTasks = document.querySelector(".category-tasks");
const categoryImg = document.querySelector("#category-img");
const totalTasks = document.querySelector(".totalTasks");

const calculateTotal = () => {//--------------------------------------noted
    const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    totalCategoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
    totalTasks.innerHTML = tasks.length;
};


const renderCategories = () => {//---------------------------------------noted
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
        const categoryTasks = tasks.filter(
            (task) => task.category.toLowerCase() === category.title.toLowerCase()
        );
        //create a div
        const div = document.createElement("div");
        div.classList.add("category");

        div.addEventListener("click", () => {
            wrapper.classList.add("show-category");
            selectedCategory = category;
            categoryTitle.innerHTML = category.title;
            categoryImg.src = `assets/${category.img}`;
            calculateTotal();
            renderTasks();//-----------------------------noted
        });

        div.innerHTML = `
        <div class="left">
        <img src="assets/${category.img}" alt="${category.title}">
        <div class="content">
            <h1>${category.title}</h1>
            <p>${categoryTasks.length}</p>
        </div>
    </div>
    <div class="options">
        <div class="toggle-btn">
            <img src="assets/three-dots.png" alt="">
        </div>
    </div>
        `;
        categoriesContainer.appendChild(div);

    });
};

const tasksContainer = document.querySelector(".tasks");


const renderTasks = () => {//--------------------------------------noted
    tasksContainer.innerHTML = "";
    const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    //--------------------------if no tasks for this category -----------------

    if (categoryTasks.length === 0) {
        tasksContainer.innerHTML = `
    <p class="no-task"> No tasks for this category...</p>
    `;
    } else {//---------------------------------------------noted
        categoryTasks.forEach((task) => {
            const div = document.createElement("div");
            div.classList.add("task-wrapper");
            const label = document.createElement("label");
            label.classList.add("task");
            label.setAttribute("for", task.id);
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = task.id;
            checkbox.checked = task.completed;
            checkbox.addEventListener("change", () => {
                const index = tasks.findIndex((t) => t.id === task.id);
                tasks[index].completed = !tasks[index].completed;
                saveLocal();
            });

            div.innerHTML = `
            <div class="delete">
            <img src="assets/trash.png" alt="">
        </div>
            `;
            label.innerHTML = `
            <span class="checkmark">
                <img src="assets/check-mark.png" alt="">
            </span>
                <p>${task.task}</p>
            `;
            label.prepend(checkbox);
            div.prepend(label);
            tasksContainer.appendChild(div);

            const deleteBtn = div.querySelector(".delete");
            deleteBtn.addEventListener("click", () => {
                const index = tasks.findIndex((t) => t.id === task.id);
                tasks.splice(index, 1);
                saveLocal();
                renderTasks();
            });
        });
        renderCategories();
        calculateTotal();
    };

};

const saveLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
const getLocal = () => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    if (localTasks) {
        tasks = localTasks;
    }
};

const categorySelect = document.querySelector("#category-select");
const cancelBtn = document.querySelector(".cancel-btn");
const addBtn = document.querySelector(".add-btn");

const taskInput = document.querySelector("#task-input");

cancelBtn.addEventListener("click", toggelAddTaskForm);
addBtn.addEventListener("click", () => {
    const task = taskInput.value;
    const category = categorySelect.value;

    if ((task === "")) {
        alert("Plese enter a task");
    } else{
        const newTask={
            id:tasks.length+1,
            task,
            category,
            completed:false,
        };
        tasks.push(newTask);
taskInput.value="";
        saveLocal();
        toggelAddTaskForm();
        renderTasks();
    }
});

categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.title.toLowerCase();
    option.textContent = category.title;
    categorySelect.appendChild(option);
});


getLocal();
renderTasks();
calculateTotal();







