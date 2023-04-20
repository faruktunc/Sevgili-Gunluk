class Diary{
    
    constructor(title,text,date){
        this.date=date || (new Date()).toLocaleDateString('en-GB');
        this.title=title;
        this.text=text;
    }
    getDiary(){
        return this._title+"-"+this.date;
    }
    set title(baslik){
        if(baslik==null) throw `baslik null olamaz`;
        if(baslik.length<2){
           throw `gecersiz baslik formati`;
        }
        this._title=baslik;

    }

    set text(metin){
        if(metin==null) throw `metin null olamaz`;
        if(metin.length<10){
          throw `gecersiz metin uzunlugu: metin.length= ${metin.length}`;
        }
        this._text=metin;

    }
    createID(){
       return this._title.split(" ").join("")+this.date.split("/").join("")+Date.now();
    }
}

