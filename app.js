let first_id = document.querySelector(`#for_header`);
first_id.addEventListener(`click`, color_change);

function color_change (details) {
    details[`target`][`style`][`backgroundColor`] = `orange`;
}

let second_id = document.getElementById(`for_main`);
second_id.addEventListener(`dblclick`, new_element);

function new_element(details) {
    second_id[`outerHTML`] = `<h5>you doubleclicked</h5>`;
}

let third_id = document.querySelector(`#for_footer`);
third_id.addEventListener(`mouseover`, add_tags_3);

function add_tags_3(details) {
    let i = 0;
    while (i < 3) {
        if(third_id.length < 4) {
            third_id[`outerHTML`] += `<p>added ${i +1}</p>`;
        } else {
            third_id[`outerHTML`] = `<p>added ${i +1}</p>` + `<p>added ${i +1}</p>` +`<p>added ${i +1}</p>` +third_id[`outerHTML`] 
        }
        
        i++
    }
}