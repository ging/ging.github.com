let research_data = [{
    "id": 1,
    "paper_title": "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
    "paper_date": "13-Mar-2018",
    "paper_briefing": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    "paper_authors": "felis eu sapien cursus vestibulum proin eu mi nulla ac",
    "paper_url": "http://domainmarket.com"
  }, {
    "id": 2,
    "paper_title": "at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula",
    "paper_date": "20-Aug-2018",
    "paper_briefing": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    "paper_authors": "aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non",
    "paper_url": "https://over-blog.com"
  }, {
    "id": 3,
    "paper_title": "sed accumsan felis ut at dolor quis odio consequat varius integer ac",
    "paper_date": "23-Dec-2018",
    "paper_briefing": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    "paper_authors": "duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer",
    "paper_url": "https://blinklist.com"
  }, {
    "id": 4,
    "paper_title": "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis",
    "paper_date": "11-Sep-2018",
    "paper_briefing": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    "paper_authors": "donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce",
    "paper_url": "http://typepad.com"
  }, {
    "id": 5,
    "paper_title": "tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat",
    "paper_date": "25-Aug-2018",
    "paper_briefing": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    "paper_authors": "ut odio cras mi pede malesuada in imperdiet et commodo",
    "paper_url": "https://admin.ch"
  }];

console.log(research_data);

let papers = '';

research_data.forEach(function (data_item) {

    papers += `
    <div class="paper">
                    <div class="paper_title">
                        <h2>${firstCap(data_item.paper_title)}</h2>
                    </div>
                    <div class="paper_date">
                        ${data_item.paper_date}
                    </div>

                    <div class="paper_description description">
                        <p>${firstCap(data_item.paper_briefing)}</p>
                    </div>

                    <div class="paper_authors">
                        <div class="authors_title">
                            <h3>Authors:</h3>
                        </div>
                        <div class="authors description">
                            <p>${data_item.paper_authors}</p>
                        </div>
                    </div>

                    <div class="actions paper_actions">
                        <div class="button">
                            <a href="${data_item.paper_url}">Read paper</a>
                        </div>
                    </div>

                </div>
	`;
});


let papers_dom = document.querySelector('.papers');
papers_dom.innerHTML = papers;