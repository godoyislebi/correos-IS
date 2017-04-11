
$(document).ready(function () { 

    $('#change-code').multiselect({
                enableFiltering: true,
                includeSelectAllOption: true,
                maxHeight: 400,
                buttonWidth: '100%',
                nonSelectedText: 'Seleccione código',
                allSelectedText: 'Todos los códigos',
                filterPlaceholder: ' Buscar',
                selectAllText: ' Seleccionar todos',
                nSelectedText: 'Seleccionados',
    });

    $("#change-code").multiselect('selectAll', false);
    $("#change-code").multiselect('updateButtonText');


    $('#products').multiselect({
                enableFiltering: true,
                includeSelectAllOption: false,
                maxHeight: 400,
                buttonWidth: '100%',
                nonSelectedText: 'Seleccione producto',
                allSelectedText: 'Todos los productos',
                filterPlaceholder: ' Buscar',
                selectAllText: 'Todos los productos',
                nSelectedText: 'Seleccionados',

    });



    $('#regiones').multiselect({
                enableFiltering: true,
                includeSelectAllOption: true,
                maxHeight: 400,
                buttonWidth: '100%',
                nonSelectedText: 'Seleccione región',
                allSelectedText: 'Todos las regiones',
                filterPlaceholder: ' Buscar',
                selectAllText: 'Todas las regiones',
                nSelectedText: 'Seleccionadas',
    });


    $("#regiones").multiselect('selectAll', false);
    $("#regiones").multiselect('updateButtonText');

    $('#comuna').multiselect({
                enableFiltering: true,
                includeSelectAllOption: true,
                maxHeight: 400,
                buttonWidth: '100%',
                nonSelectedText: 'Seleccione comuna',
                allSelectedText: 'Todos las comunas',
                filterPlaceholder: ' Buscar',
                selectAllText: 'Todas las comunas',
                nSelectedText: 'Seleccionadas',
    });

    $("#comuna").multiselect('selectAll', false);
    $("#comuna").multiselect('updateButtonText');


    $(function () {
      $('[data-toggle="popover"]').popover({
        container: 'body',
        trigger: 'hover click',
      });
    });


    // funciones para calendarios en filtros
    $(function () {
        $('#datepicker1').datetimepicker({
        	locale: 'es',
        	format: 'DD/MM/YYYY',
            icons: {
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            }
        });
    });

    $(function () {
        $('#datepicker2').datetimepicker({
            locale: 'es',
            format: 'DD/MM/YYYY',
            icons: {
                date: "fa fa-calendar",
                up: "fa fa-arrow-up",
                down: "fa fa-arrow-down"
            }
        });
    });




    // Radio buttons buscar envios
    $(function() {
        $("input[name$='buscarEnvios']").click(function() {
            var test = $(this).val();
            $("div.desc").hide();
            $("#buscar" + test).show();
        });
    });


 


    //Select grafico Indicadores de gestion
    $(function() {
        $('#incidencias-ind-chart').hide();
        $('#select-ind-chart').change(function(){
            $('#incidencias-ind-chart').hide();
            $('#nivel-ind-chart').hide(); 

            if($('#select-ind-chart').val() == 'incidencias') {
                $('#incidencias-ind-chart').show(); 
            } 

            if($('#select-ind-chart').val() == 'nivel') {
                $('#nivel-ind-chart').show(); 
            } 


        });
    });



    /*//Open modal click row table
     var $table = $('#table-indicadores').bootstrapTable({
        onClickRow: function (item, $element) {
        return false,
        console.log("click row"),
        $('#detalleEntregas').modal('show')
        },
    });*/


    /*function cellStyle(value, row, index) {
        var classes = ['active', 'success', 'info', 'warning', 'danger'];
        
        if (value > 4) {
            return {
                classes: "active"
            };
        }
        return {};
    }*/

    
    //Submenu activo segun ruta
    $(function($) {
     var path = window.location.href; 
        $('.submenu li a').each(function() {
        if (this.href === path) {
            $(this).addClass('active');
            $('.submenu').addClass('in');
            $('.item-collapse').addClass('active');
            $('.item-collapse').removeClass('collapsed');
        }
     });
    });


    $(function($) {
     var path = window.location.href; 
        $('.navbar-nav > li a').each(function() {
        if (this.href === path) {
            $(this).addClass('active');
        }
     });
    });



/*    $(function(){
        $('.navbar-nav > li').on('click', function(){
            $('.navbar-nav > li').removeClass('active');
            $(this).addClass('active');
        });
    });*/



});

//aqui van las logicas de colores en tabla
function cellGreen(value, row, index, field) {
  return {
    css: {"color": "#438f9e"}
  };
}

function cellBurdeo(value, row, index, field) {
  return {
    css: {"color": "#8f3846"}
  };
}

function cellBold(value, row, index, field) {
  return {
    css: {"font-weight": "bold"}
  };
}


function cellPorcentaje(value, row, index, field) {
    if(value < 85){
      return {
        css: {"color": "#d51d3b"} //rojo
      };
    }

    if(value > 84){
      return {
        css: {"color": "#f5a623"} //naranjo
      };
    }
    if(value > 90){
      return {
        css: {"color": "#23aa72"} //verde
      };
    }
}

$(document).ready(function() {
    // jQuery update a column title from the demo table to contain a long description
    // You would not need to do this in your own code.
    $('#datos-indicadores thead tr:eq(0) th:eq(2)').html("Días de entrega");
     
    // Wrap the colspan'ing header cells with a span so they can be positioned
    // absolutely - filling the available space, and no more.
    $('#datos-indicadores thead th[colspan]').wrapInner( '<span/>' ).append( '&nbsp;' );
 
    // Standard initialisation
    $('#datos-indicadores').DataTable( {
        responsive: true,
        paging: false
    } );
} );

$(document).ready(function() {
    // jQuery update a column title from the demo table to contain a long description
    // You would not need to do this in your own code.
    $('#indicadores-proximas-entregas thead tr:eq(0) th:eq(2)').html("Días");
     
    // Wrap the colspan'ing header cells with a span so they can be positioned
    // absolutely - filling the available space, and no more.
    $('#indicadores-proximas-entregas thead th[colspan]').wrapInner( '<span/>' ).append( '&nbsp;' );
 
    // Standard initialisation
    $('#indicadores-proximas-entregas').DataTable( {
        responsive: true,
        paging: false
    } );
} );

$(document).ready(function() {
    // jQuery update a column title from the demo table to contain a long description
    // You would not need to do this in your own code.
    $('#tabla-proximas-entregas thead tr:eq(0) th:eq(2)').html("Días");
     
    // Wrap the colspan'ing header cells with a span so they can be positioned
    // absolutely - filling the available space, and no more.
    $('#tabla-proximas-entregas thead th[colspan]').wrapInner( '<span/>' ).append( '&nbsp;' );
 
    // Standard initialisation
    $('#tabla-proximas-entregas').DataTable( {
        responsive: true,
        paging: false
    } );
} );

        
$(document).ready(function() {    
    $('#detalleEntrega-table').DataTable( {
        responsive: true,
        columnDefs: [
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 2, targets: -1 }
    ]
} );
});
