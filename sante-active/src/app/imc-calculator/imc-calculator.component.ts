import { Component } from '@angular/core';

@Component({
  selector: 'app-imc-calculator',
  standalone: true,
  imports: [],
  templateUrl: './imc-calculator.component.html',
  styleUrl: './imc-calculator.component.css'
})
export class ImcCalculatorComponent {

  calculate() {
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const heightInput = document.getElementById('height') as HTMLInputElement;
    const weightInput = document.getElementById('weight') as HTMLInputElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;
    const commentParagraph = document.querySelector('.result .comment') as HTMLParagraphElement;

    if (!ageInput.value || !heightInput.value || !weightInput.value) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Calcule de l'IMC
    const age = parseFloat(ageInput.value);
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    const bmi = this.calculateBMI(height, weight);

    resultDiv.innerText = bmi.toFixed(2).toString();

    let result = "";
    let commentClass = "";

    if (bmi < 18.5) {
      result = "Vous êtes sous le seuil de votre forme physique";
      commentClass = "comment-blue";
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result = "Votre BMI est normal";
      commentClass = "comment-green";
    } else if (25 <= bmi && bmi <= 29.9) {
      result = "Votre BMI est élevé";
      commentClass = "comment-yellow";
    } else if (30 <= bmi && bmi <= 34.9) {
      result = "Votre BMI est très élevé";
      commentClass = "comment-orange";
    } else if (35 <= bmi) {
      result = "Votre BMI est extrêmement élevé";
      commentClass = "comment-red";
    }

    commentParagraph.innerText = result;
    commentParagraph.className = commentClass;

  }
  calculateBMI(height: number, weight: number): number {
    return weight / ((height / 100) * (height / 100));
  }

}
