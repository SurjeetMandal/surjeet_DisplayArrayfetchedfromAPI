let main_button = document.querySelector('.click_button');

    main_button.addEventListener('click',() => {
    main_button.style.display = 'none';

    PromiseAPI1()
  .then((result) => {
    return PromiseAPI2();
  })
  .then((result) => {
    return PromiseAPI3();
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
})

function PromiseAPI1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts")
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                let api1 = document.getElementById("api1");
                api1.style.display = "block";
        
                let api1_content = document.querySelector(".api1");
                api1_content.innerHTML = ` `;
        
                data.posts.forEach((items) => {
                  api1_content.innerHTML += ` 
                    <div class="card">
                        <div class="card_heading">
                            <p class="heading">
                                ${items.title}
                            </p>
                        </div>
                        <div class="card_body">
                            <p class="body">
                                ${items.body}
                            </p>
                        </div>
                        <div class="card_tag">
                            <p class="tag">
                                ${items.tags[0]}
                            </p>
                            <p class="tag">
                                ${items.tags[1]}
                            </p>
                            <p class="tag">
                                ${items.tags[2]}
                            </p>
                        </div>
                        <div class="card_reaction_views">
                            <div class="reaction">
                                <p class="reaction_para">
                                    Likes: ${items.reactions.likes}
                                </p>
                            </div>
                            <div class="views">
                                <p class="views_para">
                                    Views: ${items.views}
                                </p>
                            </div>
                        </div>
                    </div>
                    `;
                });
                resolve();
              });
          }, 1000);
    })
}

function PromiseAPI3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/todos")
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                let api3 = document.getElementById("api3");
                api3.style.display = "block";
        
                let todo_main_container = document.querySelector(
                  ".todo_main_container"
                );
                todo_main_container.innerHTML = "";
        
                data.todos.forEach((items) => {
                  let todo_body = document.createElement("div");
                  todo_body.classList.add("todo_body");
        
                  let todo_complition_check = document.createElement("div");
                  todo_complition_check.classList.add("todo_complition_check");
        
                  if (items.completed === true) {
                    todo_complition_check.style.backgroundColor = "#27AE60";
                  } else {
                    todo_complition_check.style.backgroundColor = "red";
                  }
        
                  todo_body.appendChild(todo_complition_check);
        
                  todo_body.innerHTML += `
                            <div class="todo_main_body">
                                <div class="id_userId">
                                    <div class="id">
                                        Id: ${items.id}
                                    </div>
                                    <div class="user_id">
                                        UserId: ${items.userId}
                                    </div>
                                </div>
                                <p class="todo_para">
                                    ${items.todo}
                                </p>
                            </div>
                        `;
        
                  todo_main_container.appendChild(todo_body);
                });
                resolve();
              });
          }, 3000);
    })
}

function PromiseAPI2() {
  return new Promise((resolve) => {
    setTimeout(() => {
        fetch("https://dummyjson.com/products")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            let api2 = document.getElementById("api2");
            api2.style.display = "block";
    
            let api2_card_container = document.querySelector(
              ".api2_card_container"
            );
            api2_card_container.innerHTML = ` `;
    
            data.products.forEach((items) => {
              api2_card_container.innerHTML += `
                <div class="api2_card">
                    <div class="api2_card_img">
                        <img src=${items.images[0]} alt="">
                    </div>
                    <div class="api2_card_body">
                        <div class="api2_card_title">
                            <p class="api1_title">
                                ${items.title}
                            </p>
                        </div>
                        <div class="api2_card_price">
                            <div class="base_price">
                                <p>Price: <span>$${items.price}</span></p>
                            </div>
                            <div class="discounted_price">
                                <p>$${items.discountPercentage}</p>
                            </div>
                        </div>
                        <div class="api2_card_button">
                            <button class="button_1">Read More</button>
                            <button class="button_2">Buy Now</button>
                        </div>
                    </div>
                </div>
                `;
            });
            resolve();
          });
      }, 2000);
  })
}
