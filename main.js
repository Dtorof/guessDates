var app = new Vue({
    el: '#app',
    data: {
      dates:['1969','1989','2001','1945','1873'],
      event:[' El alunizaje del Apolo 11','La caída del Muro de Berlín','Los atentados del 11 de Septiembre','Finalización de la II Guerra Mundial',' La independencia de Colombia'],
      attempts:0,
      selectedYear:0,
      year:0,
      position:0,
      clue:'',
      seen:false,
      name:'',
      score:[],
      isActive:false,
      messaje:"",
    
    },
    computed:{
        selectDate(){
            this.position = Math.floor(Math.random(5) * this.dates.length);
            
            this.year = this.dates[this.position];

            return this.year;
        },
   },
    methods: {

       validation(){
        this.attempts+=1;
        if(this.selectedYear== this.year){
            alert('Adivinaste')
            
        } else if (this.selectedYear> this.year){
            this.messaje='La fecha ingresada es mayor a la fecha a adivinar';
        }else{
            this.messaje='La fecha ingresada es menor a la fecha a adivinar';
        }
       },

       attemptsNumber(){
        if(this.attempts==2 && this.selectedYear!= this.year){
            this.clue=`El año de ${this.event[this.position]} `
            alert(this.clue)

        }else if (this.attempts==2 && this.selectedYear== this.year){
            alert("Ha adivinado la fecha, ingrese su nombre para guardar su Score");
            this.isActive = true;
            this.seen = true

        }else if (this.selectedYear== this.year){
            alert("Ha adivinado la fecha, ingrese su nombre para guardar su Score");
            this.isActive = true;
            this.seen = true
        }else if (this.attempts==7 ){
            alert("Has superado el limite de intentos");
            this.seen = true
            this.isActive = true;
        }
       },

       guess(){
        this.validation();
        this.attemptsNumber();
        
       },

       register(){
        
        this.score.push({name:this.name,attempts:this.attempts}); 
        
        if(this.attempts ==7){
            this.attempts = 0; 
            this.year = 0;
            this.seen = false
            this.isActive = false;

        }else if (this.selectedYear== this.year){
            
            this.attempts = 0; 
            this.year = 0;
            this.seen = false
            this.isActive = false;
        }
        

       }

      
    }
  })