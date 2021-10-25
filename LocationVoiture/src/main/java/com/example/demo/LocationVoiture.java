package com.example.demo;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class LocationVoiture implements Serializable {
/**
	 * 
	 */
private static final long serialVersionUID = 1L;
@Id
@GeneratedValue
private int id;
private String cin;
private String nom ;
private String prenom ;
private String matricule ;
private String typeVoiture ;
private String couleur ;
private String marque ;
private String referenceVoiture ;
private Date dateDebut;
private Date dateFin;
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
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getCin() {
	return cin;
}
public void setCin(String cin) {
	this.cin = cin;
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
public String getMatricule() {
	return matricule;
}
public void setMatricule(String matricule) {
	this.matricule = matricule;
}
public String getTypeVoiture() {
	return typeVoiture;
}
public void setTypeVoiture(String typeVoiture) {
	this.typeVoiture = typeVoiture;
}
public String getCouleur() {
	return couleur;
}
public void setCouleur(String couleur) {
	this.couleur = couleur;
}
public String getMarque() {
	return marque;
}
public void setMarque(String marque) {
	this.marque = marque;
}
public String getReferenceVoiture() {
	return referenceVoiture;
}
public void setReferenceVoiture(String referenceVoiture) {
	this.referenceVoiture = referenceVoiture;
}
@Override
public String toString() {
	return "LocationVoiture [id=" + id + ", cin=" + cin + ", nom=" + nom + ", prenom=" + prenom + ", matricule="
			+ matricule + ", typeVoiture=" + typeVoiture + ", couleur=" + couleur + ", marque=" + marque
			+ ", referenceVoiture=" + referenceVoiture + ", dateDebut=" + dateDebut + ", dateFin=" + dateFin + "]";
}
public LocationVoiture( String cin, String nom, String prenom, String matricule, String typeVoiture, String couleur,
		String marque, String referenceVoiture, Date dateDebut, Date dateFin) {
	super();
	this.cin = cin;
	this.nom = nom;
	this.prenom = prenom;
	this.matricule = matricule;
	this.typeVoiture = typeVoiture;
	this.couleur = couleur;
	this.marque = marque;
	this.referenceVoiture = referenceVoiture;
	this.dateDebut = dateDebut;
	this.dateFin = dateFin;
}
public LocationVoiture() {
	super();
}


}
