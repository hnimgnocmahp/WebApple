const right_header = document.getElementsByClassName('right_header')[0];
const product = document.getElementsByClassName('product')[0];
console.log(product);

product.addEventListener('click', (event) => {
    list = `  
                <div class="list_product">
                <div class="product_header">
                    <h4>Danh Sách Sản Phẩm</h4>
                    <div class="input">
                    <input
                        type="text"
                        id="search_product"
                        placeholder="  Tìm kiếm sản phẩm"
                    />
                    <i class="fa-solid fa-magnifying-glass" id="seach"></i>
                    </div>
                    <button id="add_product">Thêm Sản Phẩm</button>
                </div>
                </div>
                <div class="selection_food">
                <label id="slection_food">Tim hãng điện thoại:</label>
                <select id="food_select">
                    <option>..Tất Cả..</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Macbook">MacBook</option>
                    <option value="iPad">iPad</option>
                </select>
                <button id="product" >Reset</button>
                </div>
                <div class="table_product">
                <table border="0">
                    <thead>
                        <tr>
                            <td style="width: 80px">Mã Sản Phẩm</td>
                            <td style="width: 800px">Tên Sản Phẩm</td>
                            <td>Hình Ảnh</td>
                            <td>Loai</td>
                            <td >Giá</td>
                            <td  >Hành Động</td>
                            <td  style="width: 100px">Thông Tin Sản Phẩm</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                </div>
                <div class="pagination-buttons">
                <button id="prev"><i class="fa-solid fa-arrow-left fa-beat"></i></button>
                <div class="list_button">

                </div>
                <button id="next"><i class="fa-solid fa-arrow-right fa-beat"></i></button>
                </div>
              <div class="add_product">
              
                <div class="add_left">
                    <p id="text_p">Thêm Sản Phẩm</p>
                    <label for="fileInput" class="custom-file-upload">Chọn ảnh</label>
                    <input type="file" id="fileInput" class="input-file" />
                    <img id="PreviewImage" />
                </div>
                <div class="add_right">
                    <div class="name_product">
                    <label>Tên Điện Thoại</label>
                    <input type="text" id="name_food" />
                    </div>
                    <div class="color">
                    <label>Màu:</label>
                    <div class="checkbox-group">
                        <input type="checkbox" id="xanh" value="Xanh" />
                        <label for="xanh">Xanh</label>

                        <input type="checkbox" id="do" value="Đỏ" />
                        <label for="do">Đỏ</label>

                        <input type="checkbox" id="tim" value="Tím" />
                        <label for="tim">Tím</label>

                        <input type="checkbox" id="vang" value="Vàng" />
                        <label for="vang">Vàng</label>

                        <input type="checkbox" id="cam" value="Cam" />
                        <label for="cam">Cam</label>
                    </div>
                </div>
                
                <div class="rom">
                <label>Dung Lượng : </label>
                <div class="checkbox-group">
                    <input type="checkbox" id="rom1" value="64GB" />
                    <label for="rom1">64GB</label>
            
                    <input type="checkbox" id="rom2" value="256GB" />
                    <label for="rom2">256GB</label>
            
                    <input type="checkbox" id="rom3" value="560GB" />
                    <label for="rom3">560GB</label>
            
                    <input type="checkbox" id="rom4" value="1T" />
                    <label for="rom4">1T</label>
                </div>
            </div>
            
                    <div class="selection">
                    <label id="slection">Chọn Hãng</label>
                    <select id="select">
                    <option value="">......</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Macbook">MacBook</option>
                    <option value="iPad">ipad</option>
                    
                    </select>
                </div>
                <div class="name_product">
                    <label for="">Mã Sản Phẩm:</label>
                    <input type="text" id="key_food" />
                    <label for="">Giá Bán:</label>
                    <input type="text" id="price_food" />
                    <label for="">Chi Tiết:</label>
                    <textarea id="ghi_chu" rows="4" cols="50"></textarea>

                </div>
                <div class="save_product">
                <button id="save_product">Lưu Sản Phẩm</button>
                <button id="save_product1">Lưu Chỉnh Sửa</button>
               </div>
                </div>
                <div class="icon_x">
                    <i class="fa-solid fa-x fa-beat" id="icon_add"></i>
                </div>
                </div>
                <div class="content_product"></div>
              </div>
          `;

    right_header.innerHTML = list;

    //ADD Product
    const add_product = document.getElementsByClassName('add_product')[0];
    const icon_add = document.getElementById('icon_add');
    const btn_add = document.getElementById('add_product');
    const table_product = document.getElementsByClassName('table_product')[0];

    btn_add.addEventListener('click', () => {
        add_product.classList.add('top');
        table_product.style.display = 'none';
        document.getElementById('save_product').style.display = 'block';
        document.getElementById('save_product1').style.display = 'none';
        const text_p = document.getElementById('text_p');
        text_p.innerHTML = 'Thêm Sản Phẩm';
        restfood();
    });
    icon_add.addEventListener('click', () => {
        add_product.classList.remove('top');
        table_product.style.display = 'block';
    });

    const save_product_button = document.getElementById('save_product');
    const name_food = document.getElementById('name_food');
    const price_food = document.getElementById('price_food');
    const img_product = document.getElementById('PreviewImage');
    const key_food = document.getElementById('key_food');
    const foodSelect = document.getElementById('select');
    const rom = document.getElementsByClassName('rom')[0];
    const color = document.getElementsByClassName('color')[0];
    const ghi_chu = document.getElementById('ghi_chu');
    save_product_button.addEventListener('click', () => {
        var list_product = JSON.parse(localStorage.getItem('products')) || [];

        console.log(list_product);
        var user = {
            tensp: name_food.value,
            gia: price_food.value,
            masp: key_food.value,
            hinhanhitem: img_product.src,
            hinhanhMoTa: img_product.src,
            mau: [],
            luutru: [],
            danhmuc: foodSelect.value,
            chitiet: ghi_chu.value,
        };
        var colorCheckboxes = color.getElementsByClassName('checkbox-group')[0].getElementsByTagName('input');
        for (var i = 0; i < colorCheckboxes.length; i++) {
            if (colorCheckboxes[i].checked) {
                user.mau.push(colorCheckboxes[i].value);
            }
        }

        var checkboxes = rom.getElementsByClassName('checkbox-group')[0].getElementsByTagName('input');
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                user.luutru.push(checkboxes[i].value);
            }
        }
        console.log(user);
        list_product.unshift(user);
        const add_product = document.getElementsByClassName('add_product')[0];
        localStorage.setItem('products', JSON.stringify(list_product));
        add_product.classList.remove('top');
        const table_product = document.getElementsByClassName('table_product')[0];
        table_product.style.display = 'block';
        renderProductall();
    });
    showimgsave();
    search_product();
    food_select();
    renderProductall();
});
function showimgsave() {
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('PreviewImage');

    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];

        const reader = new FileReader();

        reader.onloadend = function () {
            previewImage.src = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            previewImage.src = '';
        }
    });
}
function search_product() {
    var list_product = JSON.parse(localStorage.getItem('products'));
    var table = document.getElementsByTagName('table')[0];
    const search_product = document.getElementById('search_product');
    var list_table = '';
    search_product.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            list_table = `
        <tr>
          <td>Mã Sản Phẩm</td>
          <td>Tên Sản Phẩm</td>
          <td>Hình Ảnh</td>
          <td>Loại</td>
          <td>Giá</td>
          <td >Hành Động</td>
          <td>Thông Tin Sản Phẩm</td>
        </tr>
      `;
            var found = false;
            list_product.forEach((list, index) => {
                const indexall = index;
                index++;
                var giaTienChinhThuc = parseFloat(list.gia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

                var inputText = search_product.value.toLowerCase();
                var productName = list.tensp.toLowerCase();
                if (inputText === productName) {
                    found = true;
                    list_table += `
            <tr>
              <td style="width:90px">${list.masp}</td>
              <td id="tensp">${list.tensp}</td>
              <td><img src="${list.hinhanhMoTa}" alt="" /></td>
              <td>${list.danhmuc}</td>
              <td>${giaTienChinhThuc}</td>
              <td>
               
                <i class="fa-solid fa-trash" onclick="delete_product(${indexall})"></i>
                <i class="fa-regular fa-pen-to-square" onclick="edit_product(${indexall})"></i>
              </td>
              <td style="width:90px"><button onclick="view_product(${indexall})">Xem</button></td>
            </tr>
          `;
                }
            });

            if (!found) {
                list_table += `
          <tr>
            <td colspan="7">Không tìm thấy sản phẩm</td>
          </tr>
        `;
            }

            table.innerHTML = list_table;
            event.preventDefault();
        }
    });
}
function food_select() {
    const product = document.getElementById('product');
    product.addEventListener('click', () => {
        renderProductall();
    });
    const tableContainer = document.getElementsByClassName('table_product')[0];
    const food_select = document.getElementById('food_select');
    var table = document.getElementsByTagName('table')[0];
    const pagination = document.getElementsByClassName('pagination-buttons')[0];
    food_select.addEventListener('change', () => {
        pagination.style.display = 'none';
        var list_table = '';
        list_table = `
        <tr>
          <td>Mã Sản Phẩm</td>
          <td>Tên Sản Phẩm</td>
          <td>Hình Ảnh</td>
          <td>Loại</td>
          <td>Giá</td>
          <td>Hành Động</td>
          <td>Thông Tin Sản Phẩm</td>
        </tr>
      `;
        var list_product = JSON.parse(localStorage.getItem('products'));
        list_product.forEach((list, index) => {
            var indexall = index;
            index++;
            var giaTienChinhThuc = parseFloat(list.gia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
            if (list.danhmuc == food_select.value) {
                list_table += `
            <tr>
              <td style="width:90px">${list.masp}</td>
              <td id="tensp">${list.tensp}</td>
              <td><img src="${list.hinhanhitem}" alt="" /></td>
              <td>${list.danhmuc}</td>
              <td>${giaTienChinhThuc}</td>
              <td id="dele_edit" >

                <i class="fa-solid fa-trash" onclick="delete_product(${indexall})"></i>
                <i class="fa-regular fa-pen-to-square" onclick="edit_product(${indexall})"></i>
              </td>
              <td style="width:90px"><button onclick="view_product(${indexall})">Xem</button></td>

            </tr>
          `;
                tableContainer.innerHTML = ''; // Xóa nội dung cũ trước khi thêm mới
                tableContainer.appendChild(table);
                table.innerHTML = list_table;
            }
        });
    });
    renderProductall();
}

function delete_product(id) {
    var list_product = JSON.parse(localStorage.getItem('products'));
    let delete_ok = confirm('Bạn có chắc muốn xóa không');
    if (delete_ok) {
        list_product.splice(id, 1);
        localStorage.setItem('products', JSON.stringify(list_product));
        renderProductall();
    }
}
function edit_product(id) {
    var list_product = JSON.parse(localStorage.getItem('products'));
    document.getElementById('save_product1').style.display = 'block';
    const save_product = document.getElementById('save_product');
    save_product.style.display = 'none';
    const productToEdit = list_product[id];
    const table_product = document.getElementsByClassName('table_product')[0];
    const add_product = document.getElementsByClassName('add_product')[0];
    add_product.classList.add('top');
    table_product.style.display = 'none';
    const text_p = document.getElementById('text_p');
    text_p.innerHTML = 'Chỉnh Sửa sản Phẩm';
    const name_food = document.getElementById('name_food');
    const price_food = document.getElementById('price_food');
    const key_food = document.getElementById('key_food');
    const foodSelect = document.getElementById('select');
    const previewImage = document.getElementById('PreviewImage');
    const save_product1 = document.getElementById('save_product1');

    showimgsave();
    name_food.value = productToEdit.tensp;
    key_food.value = productToEdit.masp;
    price_food.value = productToEdit.gia;
    foodSelect.value = productToEdit.danhmuc;
    previewImage.src = productToEdit.hinhanhitem;

    save_product1.addEventListener('click', (event) => {
        console.log(foodSelect.value);
        productToEdit.tensp = name_food.value;
        productToEdit.masp = key_food.value;
        productToEdit.gia = price_food.value;
        productToEdit.trangthai = foodSelect.value;
        productToEdit.hinhanh = previewImage.src;
        console.log(name_food.value);
        localStorage.setItem('products', JSON.stringify(list_product));
        add_product.classList.remove('top');

        table_product.style.display = 'block';
        renderProductall();
    });
}

//xem Thông Tin Sản Phẩm
function view_product(id) {
    let list_product = JSON.parse(localStorage.getItem('products'));
    let list = list_product[id];
    var giaTienChinhThuc = parseFloat(list.gia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    console.log(giaTienChinhThuc);
    let content_list = `
       
            <div class="content_title"><h1>Thông Tin Sản Phẩm</h1></div>
            <div class="content_icon">
            <i class="fa-regular fa-circle-xmark" onclick="remove_content()"></i>
            </div>
            <div class="content">
                <div class="content_left">
                    <img src="${list.hinhanhitem}" alt="" />
                </div>
                <div class="content_right">
                    <h3>ipad ${list.tensp}</h3>
                    <p>Giá : ${giaTienChinhThuc}</p>
                    <p> Màu : ${list.mau}</p>
                    <p> Dung Lượng: ${list.luutru}</p>
                </div>
            </div>
            <div class="content_footer">
                <h5>Thông tin cấu hình</h5>
                <p>
                    ${list.chitiet}
                </p>
            </div>
   
    `;

    let content_product = document.getElementsByClassName('content_product ')[0];
    content_product.innerHTML = content_list;
    content_product.classList.add('top');
    const table_product = document.getElementsByClassName('table_product')[0];
    table_product.style.display = 'none';
}
function remove_content() {
    let content_product = document.querySelector('.content_product.top');
    if (content_product) {
        content_product.classList.remove('top');
    }

    const table_product = document.querySelector('.table_product');
    if (table_product) {
        table_product.style.display = 'block';
    }
}

function renderProductall() {
    var list_product = JSON.parse(localStorage.getItem('products'));
    var table = document.getElementsByTagName('table')[0];

    //Phân Trang
    let perpage = 5; // số item trong 1 trang
    let currentPage = 1; //
    let start = 0;
    let end = perpage;
    const tatalPage = Math.ceil(list_product.length / perpage);
    console.log(tatalPage);
    const btnNext = document.getElementById('next');
    function renderProduct() {
        var list_product = JSON.parse(localStorage.getItem('products'));
        var list_table = '';
        list_table = `
              <tr>
                <td>Mã Sản Phẩm</td>
                <td>Tên Sản Phẩm</td>
                <td>Hình Ảnh</td>
                <td>Loai</td>
                <td>Giá</td>
              <td>Hành Động</td>
              <td>Thông Tin Sản Phẩm</td>
              </tr>
              `;
        list_product.map((item, index) => {
            const indexall = index;
            index++;
            var giaTienChinhThuc = parseFloat(item.gia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

            if (index > start && index <= end) {
                list_table += `
      <tr>
        <td style="width:80px">${item.masp}</td>
        <td id="tensp">${item.tensp}</td>
        <td><img src="${item.hinhanhitem}" alt="" /></td>
        <td>${item.danhmuc}</td>
        <td>${giaTienChinhThuc}</td>
        <td id="dele_edit" >
          <i class="fa-solid fa-trash" onclick="delete_product(${indexall})"></i>
          <i class="fa-regular fa-pen-to-square" onclick="edit_product(${indexall})"></i>
        </td>
        <td style="width:90px"><button onclick="view_product(${indexall})">Xem</button></td>

      </tr>
      `;
            }
        });
        table.innerHTML = list_table;
    }
    renderProduct();
    button_list();
    function getcurenpage(currentPage) {
        start = (currentPage - 1) * perpage;
        end = currentPage * perpage;
    }
    function button_list() {
        let list_btn = '';
        list_btn = `
        <button class="pageall" style="color:white;background: #0083d6">${1}</button>
        `;
        for (let i = 2; i <= tatalPage; i++) {
            list_btn += `
            <button class="pageall" >${i}</button>
            `;
        }
        document.getElementsByClassName('list_button')[0].innerHTML = list_btn;
    }
    const buttons = document.querySelectorAll('.list_button button');
    function changepage() {
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const value = parseFloat(btn.textContent);
                currentPage = value;
                console.log(btn);
                buttons.forEach((button) => {
                    button.style.color = 'black';
                    button.style.background = 'white';
                    console.log(button);
                });
                btn.style.color = 'white';
                btn.style.background = '#0083d6';
                getcurenpage(currentPage);
                renderProduct();
            });
        });
    }

    changepage();

    btnNext.addEventListener('click', () => {
        currentPage++;
        if (currentPage > tatalPage) {
            currentPage = tatalPage;
            currentPage = 1;
        }
        buttons.forEach((button) => {
            button.style.color = 'black';
            button.style.background = 'white';
        });
        const selectedButton = document.querySelector(`.list_button button:nth-child(${currentPage})`);
        if (selectedButton) {
            selectedButton.style.color = 'white';
            selectedButton.style.background = '#0083d6';
        }
        getcurenpage(currentPage);
        renderProduct();
    });
    document.getElementById('prev').addEventListener('click', () => {
        currentPage--;
        if (currentPage <= 1) {
            currentPage = 1;
        }
        buttons.forEach((button) => {
            button.style.color = 'black';
            button.style.background = 'white';
        });
        const selectedButton = document.querySelector(`.list_button button:nth-child(${currentPage})`);
        if (selectedButton) {
            selectedButton.style.color = 'white';
            selectedButton.style.background = '#0083d6';
        }
        getcurenpage(currentPage);
        renderProduct();
    });
}

function restfood() {
    const save_product = document.getElementById('save_product');
    const name_food = document.getElementById('name_food');
    const price_food = document.getElementById('price_food');
    const previewImage = document.getElementById('PreviewImage');
    const key_food = document.getElementById('key_food');
    const foodSelect = document.getElementById('select');
    name_food.value = '';
    key_food.value = '';
    price_food.value = '';
    foodSelect.value = '';
    previewImage.value = '';
}
function peole() {
    var clinet;
    const peole = document.getElementById('peole');
    peole.addEventListener('click', () => {
        clinet = `
    <div class="client">
      <div class="client_header">
            <div class="header_client">
          
              <select> 
                 <option value="Tất Cả">Tất cả</option>
                <option value="Khách Hàng Ofline">Khách Hàng Ofline</option>
                <option value="Khách Hàng Online">Khách Hàng Online</option>
              </select>
              <div class="input_client" >
                <input  type="text" placeholder="Nhập tên cần tìm" id ="seach_1"/>
              </div>
              <div class="add_account">
                <button class="excel" onclick="save_excel()"> <i class="fa-regular fa-floppy-disk"></i> excel</button>
                <button onclick="add_customer()">Thêm Khách Hàng</button>
              </div>
             
            </div>
            <div class="table">
              <table border="0">
                <thead>
                  <tr>
                    <td>STT</td>
                    <td>HỌ VÀ TÊN</td>
                    <td>LIÊN HỆ</td>
                    <td>NGÀY ĐĂNG KÍ</td>
                    <td>TRẠNG THÁI</td>
                    <td>HÀNH ĐỘNG</td>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
            <div class="add_product_1">
              <p>Thêm Khách Hàng</p>
              <div class="all_add">
              <div class="customer_add">
                <div class="s"> 
                    <lable style="width:100px">HỌ VÀ TÊN</lable>
                    <input type="text"/>
                </div>
                <div class="s">
                    <lable style="width:100px">LIÊN HỆ</lable>
                    <input type="text"/>
                </div>
                <div class="s">
                    <lable style="width:100px">passwowrd</lable>
                    <input type="text"/>
                </div>
              <div class="clent_button">
              <button id="add_clent">Thêm Khách Hàng</button>
              <button id="save_clent">Lưu Khách Hàng</button>
              </div>
              </div>
                <div class="icon_x_1">
                    <i class="fa-solid fa-x fa-beat" id="icon_add"></i>
                </div>
             </div> 
              </div>
        </div>
    </div>
    `;
        right_header.innerHTML = clinet;
        user();
        renderuser();
        seach_people();
        user_slection();
    });
    function user() {
        const acount = JSON.parse(localStorage.getItem('acount')) || [];
        console.log(acount);
        var user = `
     <tr>
        <td>STT</td>
        <td>HỌ VÀ TÊN</td>
        <td>LIÊN HỆ</td>
        <td>NGÀY ĐĂNG KÍ</td>
        <td>TRẠNG THÁI</td>
        <td>HÀNH ĐỘNG</td>
      </tr>
    `;
        acount.map((list, index) => {
            var indexall = index;
            index++;
            user += ` <tr>
    <td>${index}</td>
    <td>${list.name}</td>
    <td>${list.phonr}</td>
    <td>${list.date}</td>
    <td><button class="on_of">Online</button></td>
    <td><i class="fa-solid fa-trash" onclick="delete_user(${indexall})"></i>
    <i class="fa-regular fa-pen-to-square" onclick="edit_user(${indexall})"></i></td>
  </tr>`;
        });
    }
}
peole();

//Xóa Khách Hàng
function delete_user(id) {
    const acount = JSON.parse(localStorage.getItem('user')) || [];
    var dele = confirm('Bạn có muốn xóa không');
    if (dele) {
        acount.splice(id, 1);
        localStorage.setItem('user', JSON.stringify(acount));
        renderuser();
    }
}
// Chỉnh Sửa Khách Hàng
function edit_user(id) {
    const add_product = document.getElementsByClassName('add_product_1')[0];

    const acount = JSON.parse(localStorage.getItem('user')) || [];
    var acount_id = acount[id];

    var save_clent = document.getElementById('save_clent');

    save_clent.style.display = 'block';
    let value_input = document.querySelectorAll('.all_add input');
    document.getElementById('add_clent').style.display = 'none';
    add_customer();
    value_input[0].value = acount_id.name;
    value_input[1].value = acount_id.phone;
    value_input[2].value = acount_id.password;
    save_clent.addEventListener('click', () => {
        acount_id.name = value_input[0].value;
        acount_id.phone = value_input[1].value;
        acount_id.password = value_input[2].value;
        add_product.classList.remove('top');
        localStorage.setItem('user', JSON.stringify(acount));
        renderuser();
        value_input[0].value = '';
        value_input[1].value = '';
        value_input[2].value = '';
    });
}
function renderuser() {
    var tbody = document.getElementsByTagName('tbody')[0];
    const acount = JSON.parse(localStorage.getItem('user')) || [];
    const index_login = JSON.parse(localStorage.getItem('index_login')) || [];
    var userall = '';
    if (acount.length === 0) {
        tbody.innerHTML = "<tr><td colspan='6'>Không có khách hàng nào</td></tr>";
        return;
    }

    acount.forEach((list, index) => {
        var indexall = index;
        index++;
        userall += `<tr>
          <td>${index}</td>
          <td>${list.name}</td>
          <td>${list.phone}</td>
          <td>${list.date}</td>
          <td><button class="on_of">Online</button></td>
          <td>
            <i class="fa-solid fa-trash" onclick="delete_user(${indexall})"></i>
            <i class="fa-regular fa-pen-to-square" onclick="edit_user(${indexall})"></i>
          </td>
        </tr>`;
        tbody.innerHTML = userall;
    });
}

function add_customer() {
    const add_product = document.getElementsByClassName('add_product_1')[0];
    add_product.classList.add('top');
    const icon_add = document.getElementById('icon_add');
    icon_add.addEventListener('click', () => {
        add_product.classList.remove('top');
    });
    comtomer_value();
}

function comtomer_value() {
    var save_clent = document.getElementById('save_clent');
    console.log(save_clent);
    save_clent.style.display = 'none';
    document.getElementById('add_clent').style.display = 'block';

    let value_input = document.querySelectorAll('.all_add input');
    const add_product = document.getElementsByClassName('add_product_1')[0];
    const acount = JSON.parse(localStorage.getItem('user')) || [];
    document.getElementById('add_clent').addEventListener('click', () => {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var formattedDate = day + '-' + month + '-' + year;
        var customer = {
            name: value_input[0].value,
            phone: value_input[1].value,
            date: formattedDate,
            password: value_input[2].value,
        };
        acount.push(customer);
        localStorage.setItem('user', JSON.stringify(acount));
        renderuser();
        add_product.classList.remove('top');
        value_input[0].value = '';
        value_input[1].value = '';
        value_input[2].value = '';
    });
}

function seach_people() {
    let seach = document.getElementById('seach_1');
    var tbody = document.getElementsByTagName('tbody')[0];
    seach.addEventListener('keypress', (event) => {
        if (event.key == 'Enter') {
            const acount = JSON.parse(localStorage.getItem('user')) || [];
            var userall = '';
            acount.map((list, index) => {
                var displayIndex = index + 1;
                let name_seach = seach.value.toLowerCase();
                let name_list = list.name.toLowerCase();
                if (name_seach == name_list) {
                    userall += `<tr>
                                    <td>${displayIndex}</td>
                                    <td>${list.name}</td>
                                    <td>${list.phone}</td>
                                    <td>${list.date}</td>
                                    <td><button  class="on_of">Online</button></td>
                                    <td>
                                        <i class="fa-solid fa-trash" onclick="delete_user(${index})"></i>
                                        <i class="fa-regular fa-pen-to-square" onclick="edit_user(${index})"></i>
                                    </td>
                                </tr>`;
                    tbody.innerHTML = userall;
                } else {
                    tbody.innerHTML = "<tr><td colspan='6'>Không có khách hàng nào</td></tr>";
                    return;
                }
            });
        }
    });
}

function user_slection() {
    let header_client_selction = document.querySelectorAll('.header_client select')[0];
    const acount = JSON.parse(localStorage.getItem('user')) || [];
    header_client_selction.addEventListener('change', () => {
        if (header_client_selction.value == 'Khách Hàng Online') {
            renderuser();
        }
        if (header_client_selction.value == 'Khách Hàng Ofline') {
            var tbody = document.getElementsByTagName('tbody')[0];
            tbody.innerHTML = "<tr><td colspan='6'>Không có khách hàng nào</td></tr>";
            return;
        }

        if (header_client_selction.value == 'Tất Cả') {
            renderuser();
        }
    });
}
function save_excel() {
    const acount = JSON.parse(localStorage.getItem('user')) || [];
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');
    worksheet.addRow(['STT', 'Họ Và Tên', 'Liên Hệ', 'Ngày Đăng Kí', 'Trạng Thái']);
    acount.forEach((item, index) => {
        const rowData = [index + 1, item.name, item.phonr, item.date, 'Hoạt Động'];

        worksheet.addRow(rowData);
    });
    workbook.xlsx.writeBuffer().then(function (buffer) {
        const blob = new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        saveAs(blob, 'uer_name.xlsx');
    });
}
