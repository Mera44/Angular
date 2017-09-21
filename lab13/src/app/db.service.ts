

export class DbService {
 data = {};
  constructor() { 
    this.data = [{id: 1, name: 'Asad Saad', stuId: '12345', email: 'assad@mum.edu'},
                {id: 2, name: 'Michael Jackson', stuId: '4567', email: 'MJ@mum.edu'}
  ]
  }

  getData() {
    return this.data;
}
}
