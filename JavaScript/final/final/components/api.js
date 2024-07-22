const post = async (data) => {
    let isexist = false;
    (async () => {
      const users = await getUsers();
  
      users.map((elem) => {
        if (elem.email === data.email) {
          alert("Email already exists");
          isexist = true;
          return;
        }
      });
  
      if (!isexist) {
        let response = await fetch(
          "https://json-server-hkhy.onrender.com",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        window.location.href = "/final/pages/login.html";
      }
    })();
  };
  
  const getUsers = async () => {
    let response = await fetch("https://json-server-hkhy.onrender.com");
    let users = await response.json();
    return await users;
  };
  
  const getUserData = async (data) => {
    (async () => {
      const users = await getUsers();
  
      users.map((elem) => {
        if (elem.email === data.email) {
          if (elem.password === data.password) {
            localStorage.setItem("loginUser", JSON.stringify(elem));
            window.location.href = "/final/index.html";
          } else alert("Wrong Password");
        } else alert("Account not found");
      });
    })();
  };
  
  const getFoodData = async () => {
    let response = await fetch("https://json-server-hkhy.onrender.com/Food_Data");
    let food = await response.json();
    return await food;
  };
  
  const updateUser = async (id, data) => {
    console.log(id);
    console.log(data);
    const response = await fetch(
      `https://json-server-hkhy.onrender.com/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  };
  
  export { post, getUsers, getUserData, getFoodData, updateUser };