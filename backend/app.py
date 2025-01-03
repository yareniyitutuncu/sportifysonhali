from flask import Flask, jsonify, request
from flask_cors import CORS
from model import predict_exercises

app = Flask(__name__)
CORS(app)

@app.route('/api/predict', methods=['POST'])
def predict_route():
    try:
        user_input = request.json
        if not user_input:
            return jsonify({"error": "No input provided"}), 400

        results = predict_exercises(user_input)
        print("Prediction results:", results)  # Tahmin sonuçlarını kontrol edin

        return jsonify({"predictions": results})
    except Exception as e:
        print("Error:", str(e))  # Hata mesajını yazdırın

        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
