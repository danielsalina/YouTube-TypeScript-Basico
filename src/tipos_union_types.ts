(() => {
  let user_id: string | number;
  user_id = 'John Doe';
  user_id = 5616;

  function session(user_id: string | number) {
    if (typeof user_id === 'string') {
      console.log(`Hola ${user_id.toUpperCase()}`);
    } else {
      console.log(`Tu id de usuario es el ${user_id.toString()}`);
    }
  }

  session('John Doe');
  session(5616);
})();
