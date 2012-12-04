(function ($) {
    $.fn.splitDate = function(date) {
        return this.each(function(){
            var thisyear = (date || new Date()).getFullYear();

            self = this;
            
            date_span = $("<span></span>").attr("class", "date_dropdowns");
        
            // day
        
            date_day = $("<select></select>").attr({"class": "date-day", "data-ignore": "true", "size": "1"});
            for (var i = 1; i < 32; i++){
                date_day.append($('<option></option>').val(i).html(i));
            }
        
            if (date) {
                date_day.val(date.getDate());
            }
            date_span.append(date_day);
        
        
            // month
        
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
            date_mon = $("<select></select>").attr({"class": "date-month", "data-ignore": "true", "size": "1"});
            for (var i=0; i < months.length; i++) {
                date_mon.append($('<option></option>').val(i+1).html(months[i]));
            };
            
            if (date) {
                date_mon.val(date.getMonth()+1);
            }
        
            date_span.append(date_mon);
        
            // year
        
            date_year = $("<select></select>").attr({"class": "date-year", "data-ignore": "true", "size": "1"});
        
            for (var i = 5; i >= 0; i--){
                year = thisyear - i;
                date_year.append($('<option></option>').val(year).html(year));
            }
        
            if (date) {
                date_year.val(thisyear);
            }
            date_span.append(date_year);
        
            $(self).hide().after(date_span);

            // update the date field when the day, month and year select fields change.
            $(date_span).find('select').bind('change', function () {
                $(self).val(date_year.val()+"-"+date_mon.val()+'-'+date_day.val());
                });
            $(date_day).trigger('change');


        });
        
    }
})(Zepto);
