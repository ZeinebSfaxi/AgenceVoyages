package com.esprit.hotels;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Hotel implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private int id;
	private String nomHotel;
	private String adresse;
	private Date debut;
	private Date fin;
	private String nomVoyageur;
	private String prenomVoyageur;
	private String cin;
	
	

	public Hotel() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	

	public String getNomHotel() {
		return nomHotel;
	}


	public void setNomHotel(String nomHotel) {
		this.nomHotel = nomHotel;
	}


	public String getAdresse() {
		return adresse;
	}


	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}


	public String getNomVoyageur() {
		return nomVoyageur;
	}


	public void setNomVoyageur(String nomVoyageur) {
		this.nomVoyageur = nomVoyageur;
	}


	public String getPrenomVoyageur() {
		return prenomVoyageur;
	}


	public void setPrenomVoyageur(String prenomVoyageur) {
		this.prenomVoyageur = prenomVoyageur;
	}




	public String getCin() {
		return cin;
	}


	public void setCin(String cin) {
		this.cin = cin;
	}


	public Hotel(String nomHotel, String adresse, Date debut, Date fin, String nomVoyageur, String prenomVoyageur,
			String cin) {
		super();
		this.nomHotel = nomHotel;
		this.adresse = adresse;
		this.debut = debut;
		this.fin = fin;
		this.nomVoyageur = nomVoyageur;
		this.prenomVoyageur = prenomVoyageur;
		this.cin = cin;
	}


	public Date getDebut() {
		return debut;
	}
	public void setDebut(Date debut) {
		this.debut = debut;
	}
	public Date getFin() {
		return fin;
	}
	public void setFin(Date fin) {
		this.fin = fin;
	}

}
