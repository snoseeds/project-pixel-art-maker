$(function () {

// Select color input
    let colorPicker = $('.ColorPicker');

// Select size input
    let heightInput = $('.InputHeight');
    let widthInput = $('.InputWidth');

// select CANVAS
    const CANVAS = $('.PixelCanvas');

// Define makeGrid which is to be called when user submits size
    function makeGrid() {
        CANVAS.find('tbody').remove();

        // "submit" the size form to update the grid size
        let gridRows = heightInput.val();
        let gridCol = widthInput.val();

        // set tbody to the table
        CANVAS.append('<tbody></tbody>');

        let canvasBody = CANVAS.find('tbody');

        // draw grid row
        for (let i = 0; i < gridRows; i++) {
            canvasBody.append('<tr></tr>');
        }

        // draw grid col
        for (let i = 0; i < gridCol; i++) {
            CANVAS.find('tr').append('<td class="transparent"></td>');
        }

    }

	
// Listen to Events (Clicking Submit Button and Clicking A Cell of the Table)	
    $(document).ready(function () {
        // Listen if submit button is clicked
        $('input[type="submit"]').on('click', function (e) {
            e.preventDefault();
			//When size is submitted by the user, call makeGrid() to update the Grid accordingly
            makeGrid();
        });


        // toggle grid color
		    // Listen if a cell is clicked
        $('.PixelCanvas').on('click', 'td', function (e) {
            //updating painting color to the toggled selection of the color picker
            let color = colorPicker.val();
            let currentColor = $(this).css('background-color');
            console.log(currentColor+ " color:" + color);
			      // setting the color of a clicked pixel canvas to the updated painting color and/or clearing its colour and/or giving it another color
            if($(this).hasClass('transparent')){
                $(this).toggleClass('transparent');
                $(this).css("background-color", color);
            } else{
                $(this).toggleClass('transparent');
                $(this).css("background-color", "transparent");
            }

        })

    });

});
