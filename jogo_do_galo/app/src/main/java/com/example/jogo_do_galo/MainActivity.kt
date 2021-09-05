package com.example.jogo_do_galo

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.view.View
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun bClick(view: View){
        val bSelected = view as Button
        var pId = 0
        when (bSelected.id){
            R.id.button1 -> pId = 1
            R.id.button2 -> pId = 2
            R.id.button3 -> pId = 3
            R.id.button4 -> pId = 4
            R.id.button5 -> pId = 5
            R.id.button6 -> pId = 6
            R.id.button7 -> pId = 7
            R.id.button8 -> pId = 8
            R.id.button9 -> pId = 9



        }


        play_game(pId,bSelected)
    }

    var jogador1 = ArrayList<Int>()
    var jogador2 = ArrayList<Int>()

    var ajogar = 1

    private fun play_game(pId: Int, bSelected: Button) {
        if(ajogar == 1){
            bSelected.text="X"
            bSelected.setBackgroundColor(Color.parseColor( "#4BE12A"))
            jogador1.add(pId)
            ajogar= 2
        }else{
            bSelected.text="O"
            bSelected.setBackgroundColor(Color.parseColor( "#E12A49"))
            jogador2.add(pId)
            ajogar= 1
        }
        bSelected.isEnabled=false

        vencedor()

    }

    private fun vencedor() {
        var ganhou = -1

        //coluna1
        if(jogador1.contains(1)&& jogador1.contains(2) && jogador1.contains(3)){
            ganhou=1
        }
        if(jogador2.contains(1)&& jogador2.contains(2) && jogador2.contains(3)) {
            ganhou = 2
        }
        //coluna2

        if(jogador1.contains(4)&& jogador1.contains(5) && jogador1.contains(6)) {
            ganhou = 1
        }
        if(jogador2.contains(4)&& jogador2.contains(5) && jogador2.contains(6)) {
            ganhou = 2
        }

        //coluna3

        if(jogador1.contains(7)&& jogador1.contains(8) && jogador1.contains(9)) {
            ganhou = 1
        }
        if(jogador2.contains(7)&& jogador2.contains(8) && jogador2.contains(9)) {
            ganhou = 2
        }

        //linha1
        if(jogador1.contains(1)&& jogador1.contains(4) && jogador1.contains(7)) {
            ganhou = 1
        }
        if(jogador2.contains(1)&& jogador2.contains(4) && jogador2.contains(7)) {
            ganhou = 2
        }

        //linha2
        if(jogador1.contains(2)&& jogador1.contains(5) && jogador1.contains(8)) {
            ganhou = 1
        }

        if(jogador2.contains(2)&& jogador2.contains(5) && jogador2.contains(8)) {
            ganhou = 2
        }

        //linha3
        if(jogador1.contains(3)&& jogador1.contains(6) && jogador1.contains(9)) {
            ganhou = 1
        }
        if(jogador2.contains(3)&& jogador2.contains(6) && jogador2.contains(9)) {
            ganhou = 2
        }


        //diagonal1
        if(jogador1.contains(1)&& jogador1.contains(5) && jogador1.contains(9)) {
            ganhou = 1
        }
        if(jogador2.contains(1)&& jogador2.contains(5) && jogador2.contains(9)) {
            ganhou = 2
        }

        //diagonal2
        if(jogador1.contains(3)&& jogador1.contains(5) && jogador1.contains(7)) {
            ganhou = 1
        }
        if(jogador2.contains(3)&& jogador2.contains(5) && jogador2.contains(7)) {
            ganhou = 2
        }

        if(ganhou != -1){
            if(ganhou == 1){
                Toast.makeText( this, "Jogador1 ganhou o jogo." , Toast.LENGTH_LONG).show()

            }else{
                Toast.makeText( this, "Jogador2 ganhou o jogo." , Toast.LENGTH_LONG).show()
            }
        }
    }


}