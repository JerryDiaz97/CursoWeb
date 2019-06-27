var app = new Vue({
    el : '#app',
    data : {
        list : [
        
        ],
        name: '',
        average: ''
    },
//Verification methods for status in grades 
    methods : {
        addGrade: function() {
            statusA = false;
            if(this.average >= 6.5){
                statusA = true;
            }
            if(this.name!="" && this.average!=""){
                this.list.push({name:this.name, average:this.average, status:statusA});
                this.name = "";
                this.average = "";
            }
            else{
                alert("Verifique que se han llenado los campos");
            }
        } 
    }
    
})