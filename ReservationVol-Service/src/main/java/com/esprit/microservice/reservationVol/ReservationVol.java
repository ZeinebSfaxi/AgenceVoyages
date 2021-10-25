package com.esprit.microservice.reservationVol;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity

public class ReservationVol {
	
	private static final long serialVersionUID = 6;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom,prenom,email;
	
	private int cin;
	private String pays;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private Date dateDebut;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private Date dateFin;
	
	private int nbPersonne;
	
	private int hotelId;
	
	

	public int getHotelId() {
		return hotelId;
	}

	public void setHotelId(int hotelId) {
		this.hotelId = hotelId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getCin() {
		return cin;
	}

	public void setCin(int cin) {
		this.cin = cin;
	}

	public String getPays() {
		return pays;
	}

	public void setPays(String pays) {
		this.pays = pays;
	}

	public Date getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	public Date getDateFin() {
		return dateFin;
	}

	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}

	public int getNbPersonne() {
		return nbPersonne;
	}

	public void setNbPersonne(int nbPersonne) {
		this.nbPersonne = nbPersonne;
	}

	public ReservationVol() {
		super();
	}

	public ReservationVol(String nom) {
		super();
		this.nom = nom;
	}

	@Override
	public String toString() {
		return "ReservationVol [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", email=" + email + ", Cin=" + cin
				+ ", pays=" + pays + ", dateDebut=" + dateDebut + ", dateFin=" + dateFin + ", nbPersonne=" + nbPersonne
				+ "]";
	}
	
	
}
