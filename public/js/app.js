var DATA = {
  title: 'University of Montana: Student Directory',
  items: [
    { id: 1, name: 'John', email: 'John@u.mt.com', gpa: 4.0 },
    { id: 2, name: 'Sarah', email: 'Sarah@u.mt.com', gpa: 3.0 },
    { id: 3, name: 'Paul', email: 'Paul@u.mt.com', gpa: 2.7 },
    { id: 4, name: 'Emily', email: 'Emily@u.mt.com', gpa: 2.6 },
    { id: 5, name: 'Derek', email: 'Derek@u.mt.com', gpa: 3.8 },
    { id: 6, name: 'Kathy', email: 'Kathy@u.mt.com', gpa: 3.9 },
    { id: 7, name: 'Brina', email: 'Brina@u.mt.com', gpa: 2.7 },
    { id: 8, name: 'Clare', email: 'Clare@u.mt.com', gpa: 3.6 },
    { id: 9, name: 'Mike', email: 'Mike@u.mt.com', gpa: 2.0 },
  ]
};

var StudentPanels = React.createClass({
    render: function() {
        var students = this.props.data.items.map(function(k){
        return (
				<div>
                   <div className="col-md-4">
                   <div className="panel panel-default">
                       <div className="panel-heading">
                           <h3 className="panel-title">Student {k.id}</h3>
                       </div>
                       <div className="panel-body">
                           <p>{k.name}</p>
                           <p>{k.email}</p>
                           <p>{k.gpa}</p>
                       </div>
                   </div>
                   </div>
				</div>
        	)
    });
        return (
            <div>
            {students}
            </div>
            );
    }
});

var GpaTable= React.createClass({
    render: function(){
        function filt(m){
            return m.gpa>=3.5;
        }
        var honorStudents = this.props.data.items.filter(filt).map(function(l){
            return (
                <div>
                      <tr>
                        <td>{l.name}</td>
                        <td>{l.email}</td>
                        <td>{l.gpa}</td>
                      </tr>
                </div>
                )
        });
        return(
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>GPA</th>
                  </tr>
                </thead>
                <tbody>
                  {honorStudents}
                </tbody>
              </table>
            </div>
            );
    }
});

var StudentBox = React.createClass({
    render: function() {
        return (
				<div>
                <div className="container">
                    <div className="jumbotron">
                        <h4> {this.props.data.title} </h4>
                    </div>
                <StudentPanels data={DATA}/>
                <GpaTable data={DATA}/>
				</div>
                </div>
        	);
    }
});

React.render(<StudentBox data={DATA}/>, document.body)
