import React from 'react'

const index = () => {
  return (
    <>
        <div class="bg"></div>
        <main class="form-signin">
            <h1 class="h3">Age Calculator</h1>
            <form action="">
            <div class="form-floating">
            <input type="text" class="form-control" id="floatingInput" placeholder="ie. 26/09/2000" required />
            <label for="floatingInput">Your Date of Birth</label>
            </div> 
 
            <button class="w-100 btn btn-lg" type="submit">Calculate</button>
            </form>
        </main>
    </>
  )
}

export default index