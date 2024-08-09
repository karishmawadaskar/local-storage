const nameElement = document.getElementById('name');
    const greetingElement = document.getElementById('greeting');
    const btnElement = document.getElementById('save');

    function save(){
      const userName = nameElement.value;

      if(!userName){
        alert('Please enter your name');
        return;
      }

      localStorage.setItem('name', userName);
      greetingElement.innerText = `Hello ${userName}`;
      hideElements();
    }

    const userName = localStorage.getItem('name');

    if(userName){
      greetingElement.innerText = `Hello ${userName}`;
      hideElements();
    }

    function hideElements(){
      btnElement.style.display = 'none';
      nameElement.style.display = 'none';
    }

    function logout(){
      localStorage.removeItem('name');
      window.location.reload();
    }