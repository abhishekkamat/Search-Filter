let users = [
    'Gitesh',
    'Abhishek',
    'Brajesh',
    'Vipin',
    'Shrijani',
    'Snehankita',
    'Ayush',
    'Akshita',
    'Vibhu'
  ];
  
  ul = document.getElementById("users-list");
  
  let render_lists = function(lists){
    let li = "";
    for(index in lists){
      li += "<li>" + lists[index] + "</li>";
    }
    ul.innerHTML = li;
  }
  
  render_lists(users);
  
  // lets filters it
  input = document.getElementById('filter_users');
  
  let filterUsers = function(event){
    keyword = input.value.toLowerCase();
    filtered_users = users.filter(function(user){
          user = user.toLowerCase();
         return user.indexOf(keyword) > -1; 
    });
    
    render_lists(filtered_users);
  }
  
  input.addEventListener('keyup', filterUsers);
  
  