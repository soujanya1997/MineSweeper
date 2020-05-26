new Vue({
    el: '#app',
    data: {
        matrix: [],
        difficulty: 3
    },
    mounted() {
        for (let i = 0; i < this.difficulty; i++) {
            let row = [];
            for (let j = 0; j < this.difficulty; j++) {
                row.push(".") ;
            }
            this.matrix.push(row) ;
        }
    }
})