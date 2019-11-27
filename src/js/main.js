const togglePass = {
    init() {
        document.documentElement.classList.add('js-enabled');
        this.input = document.querySelector('input');
        document.querySelector('button').addEventListener('click',  () =>{
            this.showPass();
        });
    },
    showPass() {
        //if (this.input.type === 'password') {
        //    this.input.type = 'text';
        //} else {
        //    this.input.type = 'password';
        //}

        // OU

        this.input.type === 'password' ? this.input.type = 'text' : this.input.type = 'password';
    }

};
togglePass.init();