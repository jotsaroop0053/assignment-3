/**** create variables ****/
const cost_per_day_full = 35;
const cost_per_day_half = 20;
let numberOfDaysSelected = 0;
let dailyRate = cost_per_day_full;
const day_selector_items = document.querySelectorAll('.day-selector li');
const full_button = document.getElementById('full');
const half_button = document.getElementById('half');
const calculatedCostSpan = document.getElementById('calculated-cost');
const clearbutton = document.getElementById('clear-button');
/**** calculate ****/
document.addEventListener("DOMContentLoaded", function() {
    function updateCost() {
        calculatedCostSpan.textContent = dailyRate * numberOfDaysSelected;
    }
    /**** colour change days of week ****/
    day_selector_items.forEach(item => {
        item.addEventListener('click', function() {
            if (!item.classList.contains('clicked')) {
                numberOfDaysSelected++;
                item.classList.add('clicked');
                updateCost();
            }
        });
    });
    /********* clear days *********/
    clearbutton.addEventListener('click', function() {
        day_selector_items.forEach(item => {
            item.classList.remove('clicked');
        });
        full_button.classList.remove('clicked');
        half_button.classList.remove('clicked');
        numberOfDaysSelected = 0; 
        updateCost();
    });
    /********* change rate *********/
    half_button.addEventListener('click', function() {
        dailyRate = cost_per_day_half;
        half_button.classList.add('clicked');
        full_button.classList.remove('clicked');
        updateCost();
    });
    full_button.addEventListener('click', function() {
        dailyRate = cost_per_day_full;
        full_button.classList.add('clicked');
        half_button.classList.remove('clicked');
        updateCost();
    });
});