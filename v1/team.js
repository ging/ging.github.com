let team_data = [{
    "id": 1,
    "first_name": "Juan",
    "last_name": "Quemada",
    "contact": "http://psu.edu/rutrum/nulla.xml",
    "team_description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
  }, {
    "id": 2,
    "first_name": "Vi",
    "last_name": "Beyne",
    "contact": "http://pagesperso-orange.fr/in/felis/eu/sapien/cursus/vestibulum.json",
    "team_description": "Nulla nisl."
  }, {
    "id": 3,
    "first_name": "Nappie",
    "last_name": "Goney",
    "contact": "http://github.io/sapien/urna/pretium/nisl.jpg",
    "team_description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet."
  }, {
    "id": 4,
    "first_name": "Morissa",
    "last_name": "Rodder",
    "contact": "http://aol.com/pulvinar/nulla/pede/ullamcorper/augue/a/suscipit.xml",
    "team_description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices."
  }, {
    "id": 5,
    "first_name": "Ainsley",
    "last_name": "Knotte",
    "contact": "https://cam.ac.uk/justo.xml",
    "team_description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
  }];

console.log(team_data);


let team = '';

team_data.forEach(function (data_item) {
    team += `
    <div class="team_member">
                    <div class="member_img">
                        <img src="./assets/img/team/${data_item.first_name.toLowerCase()}-${data_item.last_name.toLowerCase()}.jpg" alt="" class="grayscale">
                    </div>
                    <div class="member_info">
                        <div class="member_name">
                            <h2><a href="#">${data_item.first_name} ${data_item.last_name}</a></h2>
                        </div>
                        <div class="member_description description">
                            <p>${data_item.team_description}</p>
                        </div>
                    </div>
                </div> <!-- /team_member -->
    `;
});

let team_dom = document.querySelector('.team');
team_dom.innerHTML = team;

