$(document).ready( function () {
    $('#purchase_product_product_id').select2();
    // $('#purchase_products_ajax').dataTable({
    //     ajax: {
    //         url: '/purchase_products_defer',
    //         deferRender: true,
    //         dataSrc: function (json) {
    //             json.recordsTotal = json.meta.recordsTotal;
    //             json.recordsFiltered = json.meta.recordsFiltered;
    //             return json.data
    //         }
    //     },
    //     serverSide: true,
    //     columns: [
    //         { title: "Código Produto", data: 'attributes.custom_id', searchable: true, orderable: true },
    //        	{ title: "Foto", data: 'attributes.image_url', orderable: false ,searchable: false, render: function(image_url){
    //                 return '<img src="' + image_url + '"width="250px" height="163px">';
    //             }
    //         },
    //         { title: "Quantidade", searchable: false, orderable: false, data: 'attributes.quantity' },
    //         { title: "Valor", searchable: false, orderable: false, data: 'attributes.value' },
    //         { title: "Nome Produto", searchable: true, orderable: true, data: 'attributes.name' },
    //         { title: "Data de criação", searchable: false, orderable: false, data: 'attributes.created_at' },
    //         { title: "Ações", searchable: false, orderable: false, data: 'attributes.id', render: function(id){
    //             return '<a class="btn btn-default btn-xs" href="/purchase_products/'+ id + '">Ver</a><a class="btn btn-default btn-xs" href="/purchase_products/'+ id + '/edit">Editar</a><a data-confirm="Você tem certeza?" data-method="delete" rel="nofollow" class="btn btn-danger btn-xs" href="/purchase_products/'+ id + '">Deletar</a>';
    //         }}
    //     ],
    //     "language": {
    //         "url": "https://cdn.datatables.net/plug-ins/1.10.12/i18n/Portuguese-Brasil.json"
    //     },
    //     columnDefs: [
    //         { type: 'formatted-num', targets: 0 }
    //     ],
    //     "order": [[ 0, "desc" ]],
    //     responsive: true,
    //     stateSave: true
    // });
} );