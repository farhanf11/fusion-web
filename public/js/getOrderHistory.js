const convertMonth = (idx) => {
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  return month[idx]
}

const dateParser = (date) => {
  const newDate = new Date(date)

  return (
    newDate.getDate() +
    ' ' +
    convertMonth(newDate.getMonth()) +
    ' ' +
    newDate.getFullYear()
  )
}

fetch('/api/order/order-history')
  .then((res) => res.json())
  .then((res) => {
    let data = ''
    res.data.forEach((order) => {
      data += `<div class="row" style="background-color: rgb(185, 185, 185);">
      <!--nama-->
      <div class="col-lg-2 col-2">
        <p style="margin-top: 8px;">TMB FC</p>
      </div>
      <!--tanggal-->
      <div class="col-lg-2 col-1">
        <p style="margin-top: 8px;">${dateParser(
          order.date,
        )}</p>                    
      </div>
      <!--harga-->
      <div class="col-lg-2 col-2">
        <p class="mt-3 text-success">${order.total}</p>
      </div>
      <!--status-->
      <div class="col-lg-2 col-3">
        <p class="btn btn-success" disabled style="margin-top: 8px;">Booked</p>                    
      </div>
      <!--invoice--> 
      <div class="col-lg-1 col-4">
        <a href="/invoice/?orderId=${
          order.id
        }" class="mt-2 btn btn-warning">Invoice</a>
      </div>
    </div>`

      document.getElementById('order-history').innerHTML =
        data
    })
  })
  .catch((err) => console.log(err))
