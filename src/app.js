new Vue({
    el: '#app',
    data: {
        matrix: [],
        difficulty: 6
    },
    methods: {
        setCount: function(i,j) {
            let top = i-1, down = i+1, left = j-1, right = j+1;
            let count = 0 ;
            if(top>=0)
            {
                if(this.matrix[top][j] === '*')
                    count++ ;
            }
            if(down<this.difficulty)
            {
                if(this.matrix[down][j] === '*')
                    count++ ;
            }
            if(left>=0)
            {
                if(this.matrix[i][left] === '*')
                    count++ ;
            }
            if(right<this.difficulty)
            {
                if(this.matrix[i][right] === '*')
                    count++ ;
            }
            return count ;
        }
    },
    mounted() {
        for (let i = 0; i < this.difficulty; i++) {
            let row = [];
            for (let j = 0; j < this.difficulty; j++) {
                let mine = Math.random();

                if (mine <= 0.25)
                    row.push("*");
                else
                    row.push(".");
            }
            this.matrix.push(row);
        }

        for (let i = 0; i < this.difficulty; i++) {
            for (let j = 0; j < this.difficulty; j++) {
                if(this.matrix[i][j] === '.' )
                {
                    this.matrix[i][j] = this.setCount(i,j) ;
                }
            }
        }
    }
})