let itemCount = 1;
    
function addItem() {
    itemCount++;
    const itemContainer = document.getElementById('itemContainer');
    const newItem = `
        <div class="row">
            <p class="fs-2">Item ${itemCount}</p>
        </div>
        <div class="col-12">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter some text">
                <div class="input-group-append">
                    <button class="btn btn-danger" type="button" onclick="removeItem(this)">X</button>
                </div>
            </div>
        </div>
    `;
    itemContainer.insertAdjacentHTML('beforeend', newItem);
};

function removeItem(button) {
    itemCount--;
    const itemContainer = document.getElementById('itemContainer');
    const item = button.parentNode.parentNode.parentNode;
    itemContainer.removeChild(item);
};