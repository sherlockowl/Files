(function( $ ) {
 
    var currentPage = 0;
    var itemPerPage = 2;
    
    $.fn.pagination = function(data,callback) {
        var data = [
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5},
            {id: 6}
        ];
        var length = data.length;
        var total = length / itemPerPage;
        var pivot = currentPage * itemPerPage;
        var slicing = data.slice(pivot, pivot+itemPerPage);
        this.paginationRender(total,currentPage,itemPerPage);
        if(callback){
            callback(slicing);    
        }
    };
    
    $.fn.paginationRender = function(total,currentPage,itemPerPage){
        var list = '<ul class="pagination col-md-4">';
        list += '<li><a href="#">&laquo;</a></li>';
        for(var i=0;i<total;i++) {
            if(i==currentPage) {
                list+= '<li class="active"><a href="javascript:changePage('+i+')">'+(i+1)+'</a></li>';
            } else {
                list+= '<li><a href="javascript:changePage('+i+')">'+(i+1)+'</a></li>';
            }
        }
        list += '<li><a href="#">&raquo;</a></li>';
        list += '</ul>';
        return this.html(list);
    };
 
}( jQuery ));